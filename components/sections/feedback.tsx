import GridContainer from "../wrappers/gridContainer";
import { useState } from "react";
import Button from "../atoms/button";
import axios from "axios";
import FailModal from "../modal/failModal";
import SuccessModal from "../modal/successModal";
import LoadModal from "../modal/loadModal";
import { useModal } from "../modal/ModalLayout";


export enum Steps {
  main = "main",
  success = "success",
  fail = "fail",
}

export default function   FeedBack() {
  const successModal = useModal()
  const failModal = useModal()
  const loadModal = useModal()

  const [valueWithName, setValueWithName] = useState("");
  const [valueWithNameError, setValueWithNameError] = useState(false)
  const nameValidator = (value: string) => {
    if (value.length > 1) {
      setValueWithNameError(false)
      return true;
    } else {
      setValueWithNameError(true)
      return false;
    }
  };
  const handleInputValueName = (e: any) => {
    setValueWithName(e.target.value);
  };


  const [valueWithMail, setValueWithMail] = useState("");
  const [valueWithMailError, setValueWithMailError] = useState(false)
  const emailValidator = (value: string) => {
    if (
      value.match(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
      )
    ) {
      setValueWithMailError(false)
      return true
    } else {
      setValueWithMailError(true)
      return false
    }
  };
  const handleInputValueWithMail = (e: any) => {
    setValueWithMail(e.target.value);
  };


  const [valueWithNumber, setValueWithNumber] = useState("");
  const [valueWithNumberError, setValueWithNumberError] = useState(false)
  const handleInputValueWithNumber = (e: any) => {
    setValueWithNumber(e.target.value);
  };
  const [valueWithComment, setValueWithComment] = useState("");
  const handleInputValueWithComment = (e: any) => {
    setValueWithComment(e.target.value);
  };

  const checkForm = () => {
    let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    const numberValidator = (phone: string) => {
      if (regex.test(phone)) {
        setValueWithNumberError(false)
        return true
      }
      else {
        setValueWithNumberError(true)
        return false
      }
    }
    const validators = [
      nameValidator(valueWithName),
      numberValidator(valueWithNumber),
      emailValidator(valueWithMail),
    ]
    let valid = true;
    for (let result of validators) {
      if (!result) {
        valid = false;
      }
    }
    return valid;
  }


  async function handleSubmit() {
    if (checkForm()) {
      loadModal.open()
      const dataSend = [
        valueWithName,
        valueWithNumber,
        valueWithMail,
        valueWithComment,
      ]
      const resp = await axios.post("/api/addedSheet", dataSend)
      if (resp.status) {
        setTimeout(() => {
          successModal.open()
        }, 1000)
        setValueWithName("")
        setValueWithMail("")
        setValueWithNumber("")
        setValueWithComment("")
      } else if (!resp.status) {
        failModal.open()
      }
      setTimeout(() => {
        loadModal.close()
      }, 1000)
    } else if (!checkForm()) failModal.open()
  }
  return (
    <div id='contacts' className="bg-sky-blue relative pt-10">
      <LoadModal loadModal={loadModal} />
      <SuccessModal successModal={successModal} />
      <FailModal failModal={failModal} />

      <GridContainer>
        <h2 className="lg:col-span-12 md:col-span-8 col-span-4 font-firaSans font-bold lg:text-4xl-l text-2xl text-main-black-text pt-18">
          Поможем вам в выборе
        </h2>
        <p className="xl:col-span-6 lg:col-span-7 md:col-span-5 col-span-4 font-roboto font-normal lg:text-xl text-base text-main-black-text -mt-1 pb-9">
          Если у вас остались вопросы, касаемые обучения, оставьте свой номер -
          мы вам перезвоним.
        </p>
        <div className="lg:col-start-1 md:col-start-1 lg:col-span-6 md:col-span-4 col-span-4 pb-1">
          <p className="font-roboto font-normal text-base pb-1.5">Ваше имя</p>
          <div className="bg-white flex  rounded">
            <input
              value={valueWithName}
              type="text"
              className="bg-transparent focus:outline-none text-base m-4 w-full placeholder-main-black-text/40"
              placeholder={"Александр"}
              onChange={handleInputValueName}
            />
          </div>
          <p className="font-roboto font-normal text-base pb-1.5 pt-5">Телефон</p>
          <div className="bg-white flex justify-start p-4 rounded">
            <p className="bg-transparent focus:outline-none text-base placeholder-main-black-text/40">+</p>
            <input
              value={valueWithNumber}
              type="text"
              className="bg-transparent focus:outline-none text-base w-full placeholder-main-black-text/40"
              placeholder={"7 999 999 99 99"}
              onChange={handleInputValueWithNumber}
            />
          </div>
          <p className="font-roboto font-normal text-base pb-1.5 pt-5">Электронная почта</p>
          <div className="bg-white flex rounded">
            <input
              value={valueWithMail}
              type="mail"
              className="bg-transparent focus:outline-none text-base m-4 w-full placeholder-main-black-text/40"
              placeholder={"Example@gmail.com"}
              onChange={handleInputValueWithMail}
            />
          </div>
          <p className="font-roboto font-normal text-base pb-1.5 pt-5">Ваш комментарий</p>
          <div className="bg-white flex rounded h-32 items-start ">
            <textarea
              value={valueWithComment}
              className="bg-transparent focus:outline-none text-base p-4 w-full h-full placeholder-main-black-text/40"
              placeholder={"Комментарий"}
              onChange={handleInputValueWithComment}
            />
          </div>
        </div>
        <div className="lg:col-start-8 lg:col-span-3 md:col-start-6 col-span-4">
          <div className="flex flex-col md:pt-0 pt-8">
            <p className="font-firaSans font-bold text-2xl">Контакты</p>
            <p className="font-roboto font-normal text-xl pt-4">+ 7 (3452) 59-77-30</p>
            <p className="font-roboto font-normal text-xl pt-2 text-main-blue">fp@utmn.ru</p>
            <p className="font-roboto font-normal text-base pt-2.5 ">Контакты по вопросам обучения</p>
          </div>
          <div className="flex flex-col lg:pt-13">
            <p className="font-roboto font-normal text-xl pt-4">Контактное лицо</p>
            <div className={`flex items-center`}>
              <img className={`rounded-full mr-4`} src='/images/julia.webp' alt='foto' />
              <div>
                <p className="font-roboto text-base font-semibold">Юлия Сюткина</p>
                <p className="font-roboto font-normal text-base">y.v.syutkina@utmn.ru</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col lg:col-start-1 lg:col-span-6 md:col-span-8 col-span-4 ">
          <Button onClick={handleSubmit}>Отправить</Button>
          <span className="md:pl-7 md:pt-0 pt-4 font-roboto font-normal text-base">
            Нажимая на кнопку, вы соглашаетесь с политикой в отношении <a href='/privacyPolicy' className="text-main-blue underline cursor-pointer">обработки персональных данных </a>
          </span>
        </div>
      </GridContainer>
    </div>
  );
}
