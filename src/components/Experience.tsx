const Experience = () => {
  return (
    <>
      <section className="mt-22 px-15" id="experience">
        <h3 className="font-bold hover:scale-105 cursor-default">
          Work Experience.
        </h3>

        <div className="flex flex-col gap-7 mt-8">
          <div className="flex">
            <div className="h-auto rounded-lg px-8 relative">
              <div className="outline-1 h-42 w-fit flex relative"></div>
              <div className="rounded-full outline-1 h-4 w-4 items-center justify-center flex bg-black absolute top-1 left-6">
                <div className="rounded-full h-2 w-2 outline-1 bg-white"></div>
              </div>
            </div>

            <div className="flex-col">
              <p>February 2024 - June 2025</p>
              <div className="leading-none">
                <h6 className="font-semibold tracking-wide">
                  Admin Staff &ndash; Opol Community College
                </h6>
                <label className="text-muted-foreground">
                  Opol, Misamis Oriental, Philippines
                </label>
              </div>

              <div className="ml-6 mt-2">
                <ul className="list-disc ml-5 text-sm text-muted-foreground">
                  <li>
                    Manage and maintain the registrar’s information system
                  </li>
                  <li>
                    Prepare TOR (Transcript of Records) for student requests
                  </li>
                  <li>Help the registrar with any issues</li>
                  <li>Troubleshoot computer problems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
