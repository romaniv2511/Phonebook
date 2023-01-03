import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    // dispatch()
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input type="email" {...register('email')} />
      </label>
      <label>
        <input type="text" {...register('password')} />
      </label>

      <button type="submit">Sign Up</button>
    </form>
  );
};
