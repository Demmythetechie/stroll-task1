import { useState } from "react";
import axios from "axios";

function App() {

  const [binary, setBinary] = useState(0);
  function switchh() {
    binary === 0 ? setBinary(1) : setBinary(0)
  }

  function account(e) {
    e.preventDefault(); // prevent default form submission

    const acct = e.target;
    const region = acct.elements['regionId'].value;
    const question = acct.elements['question'].value;
    console.log('works');

    (async function () {
      await axios.post('https://stroll-backend-naheem-okunades-projects.vercel.app/user', {'region': region, 'question': question})
      .then(function (response) {
          console.log('works');
          console.log(response);
      })
      .catch(function (response) {
          console.log(response);
      })
    })();
    console.log('works');
  }

  return (
    <section className="flex flex-col w-[100vw] items-center justify-center overflow-x-hidden">
      <div className="w-[80%] aspect-[1/0.1] flex justify-end items-center overflow-x-hidden">
        <button onClick={switchh} className="px-[4%] py-[0.5%] border-2 border-black rounded-3xl font-[Montserrat] font-semibold">{binary === 1 ? 'User' : 'Admin'}</button>
      </div>
      <div className="w-[100%] aspect-[1/0.4] flex justify-center items-center">
        {binary === 1 ?
          <form onSubmit={account} className="flex flex-col items-end justify-between w-[25%] aspect-square px-[2%] py-[5%] shadow-2xl rounded-xl">
            <p className="font-[Montserrat] font-semibold">Regional Question</p>
            <div className="w-[90%] h-[30%]">
              <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="regionId">Region</label>
              <select className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] font-[Montserrat] text-black/45 checked:text-black sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" id="regionId" name="regionId">
                <option value="" selected disabled hidden>Select Region</option>
                <option value="+65">Singapore(+65)</option>
                <option value="+234">Nigeria(+234)</option>
                <option value="+250">Rwanda(+250)</option>
              </select>
            </div>
            <div className="w-[90%] h-[30%]">
              <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="question">Question</label>
              <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="question" name="question" placeholder=''/>
            </div>
            <input className="w-[30%] h-[15%] text-white rounded-[5px] font-[Montserrat] font-medium bg-[#0D659F] text-[1vw]" type="submit" value="create"/>
          </form>
        :
          <form className="flex flex-col justify-between w-[25%] aspect-square px-[2%] py-[5%] shadow-2xl rounded-xl">
            <p className="font-[Montserrat] font-semibold">Create account</p>
            <div className="w-[90%] h-[30%]">
              <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="regionId">Region</label>
              <select className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[3%] font-[Montserrat] text-black/45 checked:text-black sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" id="regionId" name="regionId">
                <option selected disabled hidden>Select Region</option>
                <option value="+65">Singapore(+65)</option>
                <option value="+234">Nigeria(+234)</option>
                <option value="+250">Rwanda(+250)</option>
              </select>
            </div>
            <div className="w-[90%] h-[30%]">
              <label className="text-[3vw] sm:text-[2vw] md:text-[1vw] font-[Montserrat] font-medium text-black" for="name">Full Name</label>
              <input className="text-[3vw] border border-[#c8c7c7] rounded-[5px] w-[100%] h-[60%] pl-[4%] placeholder:font-[Montserrat] sm:placeholder:text-[2vw] md:placeholder:text-[1vw] font-[Montserrat] sm:text-[2vw] md:text-[1vw] focus:outline-none focus:border focus:border-black" type="text" id="name" name="name" placeholder=''/>
            </div>
          </form>
        }
      </div>

      {/* */}

      <div className="w-[80%]">
      <table className="border-collapse w-[100%]">
        <tr className="w-[100%]">
          <th className="border border-black text-left px-[2%] py-[1%]">Company</th>
          <th className="border border-black text-left px-[2%] py-[1%]">Contact</th>
          <th className="border border-black text-left px-[2%] py-[1%]">Country</th>
        </tr>
        <tr className="w-[100%]">
          <td className="border border-black text-left px-[2%] py-[1%]">Alfreds Futterkiste</td>
          <td className="border border-black text-left px-[2%] py-[1%]">Maria Anders</td>
          <td className="border border-black text-left px-[2%] py-[1%]">Germany</td>
        </tr>
        <tr className="w-[100%]">
          <td className="border border-black text-left px-[2%] py-[1%]">Centro comercial Moctezuma</td>
          <td className="border border-black text-left px-[2%] py-[1%]">Francisco Chang</td>
          <td className="border border-black text-left px-[2%] py-[1%]">Mexico</td>
        </tr>
      </table>
      </div>
    </section>
  );
}

export default App;
