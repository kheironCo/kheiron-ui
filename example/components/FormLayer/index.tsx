import { useState } from 'react';
import {
  ButtonKUI,
  InputFieldCheckboxKUI,
  InputFieldPasswordKUI,
  InputFieldTextKUI,
} from '../../../src';
import ModalKUI from '../../../src/molecules/ModalKUI';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  lastName: z.string().min(1, { message: 'Required' }),
  password: z.string().min(8, { message: 'Min. 8 characters' }),
  terms: z
    .boolean({
      required_error: 'terms and conditions is required',
      invalid_type_error: 'isActive must be a boolean',
    })
    .refine((val) => val === true, {
      message: 'terms and conditions is required.',
    }),
});

type FormData = z.infer<typeof schema>;

const FormLayer = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    setOpen((old) => !old);
  };

  return (
    <div>
      <ButtonKUI label="form" onClick={() => setOpen(true)} />
      <ModalKUI open={open}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputFieldTextKUI width="100%" label="Name" {...register('name')} />
          {errors?.name && <p>{`${errors.name?.message}`}</p>}
          <InputFieldTextKUI width="100%" label="Last Name" {...register('lastName')} />
          {errors?.lastName && <p>{`${errors.lastName?.message}`}</p>}
          <InputFieldPasswordKUI width="100%" label="Password" {...register('password')} />
          {errors?.password && <p>{`${errors.password?.message}`}</p>}
          <InputFieldCheckboxKUI
            position="right"
            label="terms and conditions"
            {...register('terms')}
          />
          {errors?.terms && <p>{`${errors.terms?.message}`}</p>}
          <ButtonKUI label="X" type="button" onClick={() => setOpen((old) => !old)} />
          <ButtonKUI label="Submit" type="submit" />
        </form>
      </ModalKUI>
    </div>
  );
};

export default FormLayer;
