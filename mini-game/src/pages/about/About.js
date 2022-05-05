import React from 'react';
import CardAboutComponent from '../../component/CardAboutComponent';

const About = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full mt-24 gap-10">
        <CardAboutComponent
          name="Ricky Ramadani"
          birthday="5 Januari 1999"
          address="Labuhanbatu Selatan, Sumatera Utara"
          instagram="https://www.instagram.com/rkyrni/"
          whatsapp="https://wa.link/u3lbke"
          github="https://github.com/rkyrni"
          img_url="https://scontent.fkno1-1.fna.fbcdn.net/v/t39.30808-6/277098175_522367375971945_8391701537080163219_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeF9qweejWC-ut1RaueIudlMtCGQLlT6AmW0IZAuVPoCZSd5Pi2TgVNHIgGpoXQpAsp7zWvynBFxBR8rulxI7Txz&_nc_ohc=2wT4jp3jw8AAX_f3X2F&_nc_zt=23&_nc_ht=scontent.fkno1-1.fna&oh=00_AT-FeZJ6w8Yl1q00jZLEPtSKKXaUHvEHV4lBu8461OLClQ&oe=627262EF"
        />
        <CardAboutComponent
          name="Muhammad Irfan Nugraha Y"
          birthday="4 Agustus 1999"
          address="Kintap, Kalimantan Selatan"
          instagram="https://www.instagram.com/m.i.n_yuliadi/"
          whatsapp="https://wa.link/oe83dr"
          github="https://github.com/MinYuliadi"
          img_url="https://scontent.fbdj6-1.fna.fbcdn.net/v/t39.30808-6/279683504_3301099456843157_1022599448926473608_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeH9CYitvo8v6AHI4TNuLcJvvqxLEqxanO2-rEsSrFqc7fWZt9aIZLF9cbPZMrGdajsiSFGtrLVzhIVUK3Gn3agv&_nc_ohc=-jpTxr5NcGwAX-B7keV&_nc_oc=AQk8E5RiUZpFinNSL0TjffTEhBcsoTw4tVdCqHD3LMmbNnSGrXKnRV7wnUL4bNJIiV4&_nc_zt=23&_nc_ht=scontent.fbdj6-1.fna&oh=00_AT-oaTeMaY0LaFowHZ3y30fVmqFvWQ9Nn5hfY9xIPBmzBw&oe=627165EB"
        />
      </div>
    </>
  );
};

export default About;
