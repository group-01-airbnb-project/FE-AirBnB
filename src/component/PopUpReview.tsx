import React from "react";

interface PopUpProps {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUpReview: React.FC<PopUpProps> = ({ setShowPopup }) => {
  const closePopUp = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-full h-full bg-gray-800 bg-opacity-50 absolute top-0 z-20 overflow-x-hidden overflow-y-hidden ">
      <div className="flex justify-center items-center h-full mt-10">
        <div className="w-1/2 px-8 pt-6 pb-8">
          <div className="flex justify-center">
            <div className="w-full bg-white shadow-lg rounded px-8 py-5">
              <p className="font-bold text-3xl">Berikan Review</p>
              <hr className="border border-primary mt-8 mb-3" />

              <div className="flex flex-col">
                <div className="flex flex-row mt-5">
                  <div className="w-7 rounded-full mr-3">
                    <img src="https://static.vecteezy.com/system/resources/previews/007/296/443/original/user-icon-person-icon-client-symbol-profile-icon-vector.jpg" />
                  </div>
                  <span>Travis Pastrana</span>
                </div>
                <span className="mt-2">⭐ ⭐ ⭐ ⭐ ⭐</span>
                <span className="mt-2 mb-5">
                  <textarea
                    id="reviews"
                    placeholder="Review kamu..."
                    className="border border-primary bg-white text-black px-4 py-2 w-full drop-shadow-md rounded-md resize-none"
                    required
                  ></textarea>
                </span>
              </div>

              <button
                onClick={closePopUp}
                className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline mr-3"
                type="button"
              >
                Batal
              </button>
              <button
                // onClick={HandlePopUp}
                className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                type="button"
              >
                Kirim Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpReview;
