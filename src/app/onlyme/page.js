"use client";

const page = () => {
  const comments = [
    {
      name: "Somebody",
      comment:
        "g ood wther today and impressive UI ood wther today and impressive UI ood wther today and impressive UI ood wther today and impressive UI ood wther today and impressive UI",
      stamp: "19:46",
    },
    {
      name: "Somebody",
      comment:
        "g ood wther today and impressive UI ood wther today and impressive UI ood wther today and impressive UI ood wther today and impressive UI ood wther today and impressive UI",
      stamp: "19:46",
    },
    {
      name: "Somebody",
      comment:
        "g ood wther today and impressive UI ood wther today and impressive UI ood wther today and impressive UI ood wther today and impressive UI ood wther today and impressive UI",
      stamp: "19:46",
    },
    {
      name: "Somebody",
      comment:
        "g ood wther today and impressive UI ood wther today and impressive UI ood wther today and impressive UI ood wther today and impressive UI ood wther today and impressive UI",
      stamp: "19:46",
    },
    {
      name: "Somebody",
      comment:
        "g ood wther today and impressive UI ood wther today and impressive UI ood wther today and impressive UI ood wther today and impressive UI ood wther today and impressive UI",
      stamp: "19:46",
    },
    {
      name: "Somebody",
      comment: "good wther today and impressive UI",
      stamp: "19:46",
    },
    {
      name: "Somebody",
      comment: "good wther today and impressive UI",
      stamp: "19:46",
    },
  ];
  return (
    <section className="w-fit h-fit">
      <div className="flex flex-col min-h-[200px] p-[10px] gap-[30px] overflow-y-auto">
        {(!comments && (
          <div className=" ">
            <h4 className="notlink">nothing to view here </h4>
          </div>
        )) || (
          <>
            {comments.map((item, index) => {
              return (
                <div
                  className="flex flex-col w-full  p-[15px] h-fit bg-slate-900 rounded-[1.6rem]"
                  //   ref={comments.length === index + 1 ? lastMan : null}
                >
                  <h2>{item.name}</h2>
                  <h3 className="notlink">{item.comment}</h3>
                  <span className="self-end mt-2">{item.stamp}</span>
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default page;
