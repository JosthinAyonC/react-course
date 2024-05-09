
export const RegisterPage = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <div className="container">
                <form>
                    <div className="container">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>

        </div>
    )
}