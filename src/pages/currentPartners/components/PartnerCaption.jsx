const PartnersCaption = ({ img, alt, head, text1, text2, flexDir, pathh }) => {
  return (
    <>
      <section
        className={`flex ${flexDir} justify-between gap-[41px] mx-auto mt-[90px]`}
      >
        <img className="w-[48%]" src={img} alt={alt} />

        <article className="max-w-[55ch]">
          <dl className="space-y-[25px]">
            <dt className="text-twitterBlue text-[24px]">{head}</dt>
            <dl>{text1}</dl>
            <dl>{text2}</dl>
          </dl>
          {/* <button className="">Read More</button> */}
          <button className="px-5 py-2 border-twitterBlue border-[1px] text-twitterBlue mt-[36px] font-[700] rounded hover:bg-twitterBlue hover:text-white flex items-center gap-3 group">
            Read More{" "}
            <img src={pathh} alt="" className="hidden group-hover:block" />
          </button>
        </article>
      </section>
    </>
  );
};

export default PartnersCaption;
