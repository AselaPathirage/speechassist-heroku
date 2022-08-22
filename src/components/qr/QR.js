
import { QRCodeCanvas } from 'qrcode.react';

function QR() {
  const username = localStorage.getItem('userName');

  return (

    <div className="card-body text-center">
      <h5 className="card-title">QR CODE<i className="fa fa-code" aria-hidden="true"></i></h5>
      <QRCodeCanvas value={username} size={300} />
    </div>


  );

}

export default QR