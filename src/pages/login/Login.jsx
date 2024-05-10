import React from "react";

const Login = () => {
  return (
    <>
      <section>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white p-5 rounded-lg shadow-lg lg:my-28 mb-10 mx-5 lg:w-[70%] lg:fixed right-0 top-0 lg:h-[80%] overflow-y-auto"
        >
          <div>
            <div className="h-full w-1/2"></div>
            <div className="h-full w-1/2">
                <h2 className="text-xl font-bold">Login</h2>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Login;
