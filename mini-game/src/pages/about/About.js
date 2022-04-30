import React from 'react';
import CardAboutComponent from '../../component/CardAboutComponent';

const About = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full mt-24 gap-10">
        <CardAboutComponent name="Ricky" age="22 tahun" instagram="https://www.instagram.com/rkyrni/" whatsapp="https://wa.link/u3lbke" github="https://github.com/rkyrni" img_url="https://scontent.fbdj6-1.fna.fbcdn.net/v/t39.30808-1/275248906_513471423528207_7093969071913382011_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=dBqBvz0fRh8AX8zWUON&_nc_ht=scontent.fbdj6-1.fna&oh=00_AT9vl8yYlaFNAVxa8NeNJNqWPGUrmHheVHz-fkr6pdC44A&oe=6272A31F" />
        <CardAboutComponent name="Irfan" age="22 tahun" instagram="https://www.instagram.com/m.i.n_yuliadi/" whatsapp="https://wa.link/oe83dr" github="https://github.com/MinYuliadi" img_url="https://scontent.fbdj6-1.fna.fbcdn.net/v/t1.18169-9/12074827_1669961246623661_3738528741530752623_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=KZMbo8KvuEQAX_UzhDr&_nc_ht=scontent.fbdj6-1.fna&oh=00_AT_heAPjSKsBrqIrPsrlWTjyP1b50DAVz8QIQHYwBpF1nw&oe=629401FA" />
      </div>
    </>
  );
};

export default About;
