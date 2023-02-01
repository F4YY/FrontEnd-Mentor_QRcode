import "./QRcode.css";
import qrcode from "./images/image-qr-code.png";

const QRcode = () => {
  return (
    <div className="card-container">
      <img src={qrcode} alt="QRcode" className="QRcode" />
      <div className="text-container">
        <h1 className="title">
          Improve your front-end skills by building projects
        </h1>
        <p className="description">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QRcode;