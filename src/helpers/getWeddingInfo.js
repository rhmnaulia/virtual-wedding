import axios from "axios";

const getWeddingInfo = async () => {
  try {
    const response = await axios.get(
      `http://localhost:1337/api/wedding-information`
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export default getWeddingInfo;
