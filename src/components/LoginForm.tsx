import { useState, useEffect } from 'react';
import Input from './Input';


const defaultFormField = {
    username: 'DIGITAL',
    password: 'DIGITAL'
};

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        const isDisabled = username === '' || password === '';
        setButtonDisabled(isDisabled);
      }, [username, password]);

    const handleLogin = () => {
        if (defaultFormField.username === username && defaultFormField.password === password) {
            console.log(`Logowanie poprawne. Zalogowano przy pomocy następujących danych: Email - ${username}, Hasło - ${password}`);
            resetFormFields();
        }
        else {
            console.log('Błędne dane logowania. Spróbuj ponownie.');
        }
    }

    const resetFormFields = () => {
        setUsername('');
        setPassword('');
    }

    const handleUsernameChange = (newUsername: string) => {
        setUsername(newUsername);
    };

    const handlePasswordChange = (newPassword: string) => {
        setPassword(newPassword);
    };

    return (
        <div className="space-y-6">
            {/* <form className="space-y-6" action="" method="POST"> */}

            <Input
                label="Username"
                name="username"
                type="text"
                onValueChange={handleUsernameChange}
                inputValue={username}
            />

            <Input
                label="Password"
                name="password"
                type="password"
                onValueChange={handlePasswordChange}
                inputValue={password}
            />
            <div>
                <button onClick={handleLogin}
                    type="submit"
                    className={`${isButtonDisabled ? 'cursor-not-allowed' : ''} flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                    disabled={isButtonDisabled}
                >
                    Sign in
                </button>
            </div>
            {/* </form> */}
        </div>

    )
}

export default LoginForm