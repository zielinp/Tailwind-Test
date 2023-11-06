import { useState } from 'react';

const defaultFormField = {
    username: 'DIGITAL',
    password: 'DIGITAL'
};

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(true);

    const handleLogin = () => {
        if (defaultFormField.username === username && defaultFormField.password === password) {
            console.log(`Zalogowano przy pomocy następujących danych: Email - ${username}, Hasło - ${password}`);
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

    const handeUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        updateButtonDisabledState(e.target.value, password);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        updateButtonDisabledState(username, e.target.value);
    };


    const updateButtonDisabledState = (newUsername: string, newPassword: string) => {
        const isDisabled = newUsername === '' || newPassword === '';
        setButtonDisabled(isDisabled);
    };

    

    return (
        <div className="space-y-6">
            {/* <form className="space-y-6" action="" method="POST"> */}
            <div className="flex flex-col items-start	">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                </label>
                <div className="mt-2 w-full">
                    <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handeUsernameChange}
                        value={username}
                    />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>

                </div>
                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handlePasswordChange}
                        value={password}
                    />
                </div>
            </div>

            <div>
                <button onClick={handleLogin}
                    type="submit"
                    className="cursor-not-allowed disabled:opacity-75 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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