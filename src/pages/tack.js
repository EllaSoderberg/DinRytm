import React from "react";

import PageContainer from "../components/PageContainer";

function Tack() {
  return (
    <div>
      <PageContainer>
        <div className="pt-24 flex justify-center h-screen">
          <div className="text-center text-white bg-red-600 m-16 sm:w-1/2 md:w-1/3 rounded-md flex flex-col justify-center">
            <h1 className="text-5xl">Tack!</h1>
            <p className="mx-8 p-4 text-xl">
              Jag har mottagit ditt meddelande och kommer svara så snart som
              möjligt.
            </p>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}

export default Tack;
