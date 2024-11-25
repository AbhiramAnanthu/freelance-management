import React from "react";
function Login() {
  return (
    <>
      <header className="flex flex-row justify-center lg:justify-start items-center w-full h-1/2 px-4 py-3 border">
        <a href="/" className="text-4xl">
          collabZone
        </a>
      </header>
      <main className="w-full flex flex-col lg:flex-row h-[100vh] items-center justify-center">
        <div className="lg:w-1/2 lg:border-r lg: border-gray-600/50 py-5 text-center flex flex-col items-center mb-10 justify-center">
          <h1 className="text-center">For Employers</h1>
          <div className="text-center py-4">
            <p className="lg:text-center text-sm lg:text-lg mx-auto w-5/6">
              As an employer, you have the tools to bring your vision to life.
              You can post projects, browse skilled talent, manage progress and
              milestones, and make secure payments with confidence using
              built-in options.
            </p>
          </div>
          <button>Login</button>
        </div>
        <div className="lg:w-1/2 py-4 text-center flex flex-col items-center justify-center">
          <h1 className="text-center">For Freelancers</h1>
          <div className="text-center py-4">
            <p className="lg:text-center text-sm lg:text-lg w-5/6 mx-auto">
              Unlock your potential and take control of your career. Discover
              projects that match your skills, showcase your portfolio to
              attract clients, earn securely with prompt payments, and build
              your reputation to secure more gigs.
            </p>
          </div>
          <button>Login</button>
        </div>
      </main>
    </>
  );
}

export default Login;
