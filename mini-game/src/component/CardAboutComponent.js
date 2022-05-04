import React from 'react';

const CardAboutComponent = (props) => {
  return (
    <div className="flex flex-col p-10 justify-center items-start shadow-md shadow-gray-500 w-fit">
      <img className="w-[20rem] h-[20rem] " alt="" src={props.img_url} />
      <span className="pt-3">Name : {props.name} </span>
      <span>Birthday : {props.birthday} </span>
      <span>Address : {props.address} </span>
      <div className="flex gap-3 mt-3 w-full items-center justify-center">
        <a href={`${props.instagram}`}>
          <img
            className="w-10 h-10"
            alt=""
            src="https://th.bing.com/th/id/R.14fbf1be3bb79444c0245a51a0f89ab2?rik=UkXeB5L2aE8Biw&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG9.png&ehk=GnhAoqBr5eV3LRtLGDB2XElOW7mvkdk29%2byVkqj09y8%3d&risl=&pid=ImgRaw&r=0"
          />
        </a>
        <a href={`${props.whatsapp}`}>
          <img
            className="w-10 h-10"
            alt=""
            src="https://th.bing.com/th/id/R.3db05f40f9bfbfa4818e5f841359ac18?rik=i9uCGc2yoCWfNA&riu=http%3a%2f%2fspeedyclearance.uk%2fwp-content%2fuploads%2f2018%2f04%2fwhatsapp-icon.png&ehk=%2fGSNSk4y8vLd2qCiosXRI0WSYOth7SLdJewCXSxpcmY%3d&risl=&pid=ImgRaw&r=0"
          />
        </a>
        <a href={`${props.github}`}>
          <img
            className="w-10 h-10"
            src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default CardAboutComponent;
