import { useScanproduct } from '@core/store';
import { Html5Qrcode } from 'html5-qrcode';
import { useLayoutEffect } from 'react';

interface scannerProps {
  isOnchange: string | boolean;
  onChange: (val:any) => void
}

export const Scanner = (props: scannerProps): JSX.Element => {
  const { isOnchange, onChange = () => false } = props;
  const { updateProduct } = useScanproduct();

  let html5QrCode: Html5Qrcode;


  const qrConfig = { fps: 10, qrbox: { width: 300, height: 150 } };

  useLayoutEffect(() => {
    html5QrCode = new Html5Qrcode('reader');

    const qrCodeSuccessCallback = (decodedText: any, decodedResult: any) => {
      if (isOnchange) {
        onChange(decodedText)
      }
      if (decodedText) return updateProduct('serial_no', decodedText);
      updateProduct('serial_no', decodedResult);
    };
    html5QrCode.start({ facingMode: 'environment' }, qrConfig, qrCodeSuccessCallback);
  }, []);

  return (
    <div>
      <>
        <div id="reader"></div>
        {/* <div>
          success {scanResult}
        </div> */}
      </>
    </div>
  );
};
