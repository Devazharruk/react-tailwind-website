import SingleFaq from "../singleFaq/SingleFaq";

function Faq() {
  return (
    <div className="w-[80%] m-auto mb-[50px]">
      <h1 className="font-[500] text-[37px] text-center w-[80%] md:w-[50%] m-auto leading-[43px]">
        Have questions? here are the answers
        
        
      </h1>
      <div className="mt-[30px] flex flex-col gap-[10px]">
        <SingleFaq question="Q. How this theme is different from others in market?" answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." />
        <SingleFaq question="Q. Does this theme supports plugins?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam velit sint odit similique cupiditate expedita officia, doloremque nesciunt. Molestias, odit." />
        <SingleFaq question="Q. Do you provide any moneyback guarantee in this product?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit et minima laborum, quisquam voluptatem cum, aspernatur optio incidunt officiis, officia consequuntur architecto."/>
        <SingleFaq question="Q. What payment method do you support?" answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, debitis dicta. Officiis reiciendis asperiores, libero maxime facilis mollitia error, minima temporibus perferendis vitae magni nemo."/>
        <SingleFaq question="Q. Will I get money back if I am not satisfied?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut debitis suscipit tempore vel iusto sequi?"/>
        <SingleFaq question="Q. How do you provide support?" answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla dolores ut aut possimus totam consequatur earum ipsam veniam. Rem architecto eius iure quas provident odit fugit facere natus iusto.
        "/>
      </div>
    </div>
  );
}

export default Faq;

//
