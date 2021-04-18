import { ASSETS_SERVER_URL } from "../../../constans";

const ListCard = (props) => {
  const { homeImage } = props;
  const homeImgSrc = `${ASSETS_SERVER_URL}/${homeImage}`;

  return (
    <div>
      <img src={homeImgSrc} width="200px" alt="" />
    </div>
  );
};

export default ListCard;
