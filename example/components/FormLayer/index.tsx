import { useState } from 'react';
import {
  AtomDiv,
  ButtonKUI,
  InputFieldCheckboxKUI,
  InputFieldPasswordKUI,
  InputFieldTextKUI,
  ModalKUI,
} from '../../../src';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  username: z.string().min(1, { message: 'Required' }),
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

export const FormLayer = () => {
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
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '200px' }}>
          <InputFieldTextKUI
            width="100%"
            label="Username"
            errorMessage={errors?.username?.message}
            {...register('username')}
          />
          <InputFieldPasswordKUI
            width="100%"
            label="Password"
            errorMessage={errors?.password?.message}
            {...register('password')}
          />
          <InputFieldCheckboxKUI
            errorMessage={errors?.terms?.message || ''}
            position="right"
            label="terms and conditions"
            {...register('terms')}
          />
          <AtomDiv style={{}}>
            <ButtonKUI
              label="Cancel"
              variant="outlined"
              type="button"
              onClick={() => setOpen((old) => !old)}
            />
            <ButtonKUI label="Submit" type="submit" />
          </AtomDiv>
        </form>
      </ModalKUI>
    </div>
  );
};
