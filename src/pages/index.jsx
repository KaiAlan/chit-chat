import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img, Input } from "../../components";
import { useState } from "react";
const [isGroupInfoVisible, setGroupInfoVisibility] = useState(false);

  const toggleGroupInfo = () => {
    setGroupInfoVisibility(!isGroupInfoVisible);
  };

export default function DesktopFourPage() {
  return (
    <>
      <Helmet>
        <title>Chat app</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-end w-full bg-gray-900_02">
        <div className="flex flex-row justify-end w-full mx-auto max-w-[1346px]">
          <div className="h-[1024px] w-[24%] bg-gray-900_03" />
          <div className="flex flex-col items-center justify-start w-[56%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-center w-full z-[1]">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row justify-start items-start w-[57%] ml-[25px]">
                    <Img
                      src="images/img_3d_avatar_of_sm.png"
                      alt="3davatarofsm"
                      className="h-[11px] w-[8%] z-[1] rounded-[50%]"
                    />
                    <div className="flex flex-row justify-start w-[95%] ml-[-5px]">
                      <div className="flex flex-col items-end justify-start w-full">
                        <Text as="p" className="w-[92%] mr-[5px] z-[1]">
                          It is a simple and easy-to-use platform that is perfect for both beginners and experienced
                          crypto users. 
                        </Text>
                        <Img
                          src="images/img_rectangle_7.png"
                          alt="image"
                          className="w-full mt-[-45px] object-cover rounded-[5px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end w-full mt-[-55px] pt-3.5 pb-[13px] px-3.5 border-gray-900_04 border-b border-solid bg-gray-700_0f">
                    <div className="flex flex-row justify-between items-center w-[93%] mr-[18px]">
                      <div className="flex flex-row justify-start items-center w-[24%] gap-[9px]">
                        <div className="h-[49px] w-[49px] bg-gradient rounded-[24px]" />
                        <div className="flex flex-col items-start justify-start w-[64%]">
                          <Text size="lg" as="p" className="!text-white-A700 !font-medium">
                            Aden’s Room
                          </Text>
                          <Text size="xs" as="p" className="!text-cyan-700 !font-light">
                            11 Joined
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between items-center w-auto">
                        <Img src="images/img_phone.png" alt="phone_one" className="w-7 object-cover" />
                        <Img src="images/img_chat_bubble.png" alt="chatbubble_one" className="w-7 object-cover" />
                        <div className="h-[31px] w-px bg-gray-900_04" />
                        <button type="button" onClick={toggleGroupInfo}>
                        <img src="images/img_frame_22.svg" alt="image_one" className="h-[31px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[1024px] w-full mt-[-78px] relative">
                <Img
                  src="images/img_noise_texture.png"
                  alt="image_two"
                  className="justify-center h-[1024px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                />
                <div className="flex flex-col items-end justify-start w-[93%] bottom-[1%] right-0 left-0 m-auto absolute">
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-col w-[56%] gap-[101px]">
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-center items-start w-full">
                          <Img
                            src="images/img_3d_avatar_of_sm_30x30.png"
                            alt="solem_gor_one"
                            className="h-[30px] w-[30px] z-[1] rounded-[50%]"
                          />
                          <div className="h-[87px] w-[94%] ml-[-5px] relative">
                            <Img
                              src="images/img_rectangle_7_gray_900_05.svg"
                              alt="solem_gor_three"
                              className="justify-center h-[87px] left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[5px]"
                            />
                            <div className="flex flex-col items-start justify-start w-[91%] h-max right-[2%] bottom-0 top-0 m-auto absolute">
                              <Text size="s" as="p" className="!text-cyan-700">
                                Solem Gor
                              </Text>
                              <div className="flex flex-row justify-start items-start">
                                <Text as="p" className="w-[89%] mb-2.5">
                                  It is a simple and easy-to-use platform that is perfect for both beginners and
                                  experienced crypto users. 
                                </Text>
                                <Text size="s" as="p" className="mt-[50px] ml-px !font-normal">
                                  11 : 32
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-center items-start w-full">
                          <Img
                            src="images/img_3d_avatar_of_sm_30x30.png"
                            alt="3davatarofsm"
                            className="h-[30px] w-[30px] z-[1] rounded-[50%]"
                          />
                          <div className="h-[53px] w-[94%] ml-[-5px] relative">
                            <Img
                              src="images/img_rectangle_7_gray_900_05.svg"
                              alt="image"
                              className="justify-center h-[53px] left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[5px]"
                            />
                            <div className="flex flex-col items-start justify-start w-[91%] h-max gap-px right-[2%] bottom-0 top-0 m-auto absolute">
                              <Text size="s" as="p" className="!text-cyan-700">
                                Solem Gor
                              </Text>
                              <div className="flex flex-row justify-start items-start gap-[9px]">
                                <Text as="p" className="mb-[9px]">
                                  It is a simple and easy-to-use platform.
                                </Text>
                                <Text size="s" as="p" className="mt-[13px] !font-normal">
                                  11 : 32
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start w-[21%] gap-px">
                      <div className="flex flex-row justify-start w-[42%] gap-2.5">
                        <Text size="xs" as="p" className="mt-px !text-white-A700">
                          You
                        </Text>
                        <Text size="xs" as="p">
                          11 : 32
                        </Text>
                      </div>
                      <div className="h-[37px] w-full relative">
                        <Img
                          src="images/img_rectangle_10.svg"
                          alt="image_three"
                          className="justify-center h-[37px] left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[5px]"
                        />
                        <Text as="p" className="w-max bottom-[20%] right-0 left-0 m-auto !text-blue_gray-100 absolute">
                          Really!!!!!!!!
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-[9%] mt-3 gap-2.5">
                    <Text size="xs" as="p" className="mt-px !text-white-A700">
                      You
                    </Text>
                    <Text size="xs" as="p">
                      11 : 32
                    </Text>
                  </div>
                  <div className="h-14 w-[45%] relative">
                    <Img
                      src="images/img_rectangle_10.svg"
                      alt="image_four"
                      className="justify-center h-14 left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[5px]"
                    />
                    <Text
                      as="p"
                      className="justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto !text-blue_gray-100 absolute"
                    >
                      It is a simple and easy-to-use It is a simple and easy-to-use platform..
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start w-[56%] mt-[27px] mr-[303px]">
                    <div className="flex flex-row justify-start items-start w-full">
                      <Img
                        src="images/img_3d_avatar_of_sm_1.png"
                        alt="3davatarofsm"
                        className="h-[30px] w-[30px] z-[1] rounded-[50%]"
                      />
                      <div className="h-[53px] w-[94%] ml-[-5px] relative">
                        <Img
                          src="images/img_rectangle_7_gray_900_05.svg"
                          alt="image_five"
                          className="justify-center h-[53px] left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[5px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[91%] h-max gap-px right-[2%] bottom-0 top-0 m-auto absolute">
                          <Text size="s" as="p" className="!text-cyan-700">
                            Aden
                          </Text>
                          <div className="flex flex-row justify-start items-start gap-[9px]">
                            <Text as="p" className="mb-[9px]">
                              It is a simple and easy-to-use platform.
                            </Text>
                            <Text size="s" as="p" className="mt-[13px] !font-normal">
                              11 : 32
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-[56%] mt-[27px] mr-[303px]">
                    <div className="flex flex-row justify-start items-start w-full">
                      <Img
                        src="images/img_3d_avatar_of_sm_2.png"
                        alt="3davatarofsm"
                        className="h-[30px] w-[30px] z-[1] rounded-[50%]"
                      />
                      <div className="h-[53px] w-[94%] ml-[-5px] relative">
                        <Img
                          src="images/img_rectangle_7_gray_900_05.svg"
                          alt="image_six"
                          className="justify-center h-[53px] left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[5px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[91%] h-max gap-px right-[2%] bottom-0 top-0 m-auto absolute">
                          <Text size="s" as="p" className="!text-cyan-700">
                            Selena Rei
                          </Text>
                          <div className="flex flex-row justify-start items-start gap-[9px]">
                            <Text as="p" className="mb-[9px]">
                              It is a simple and easy-to-use platform.
                            </Text>
                            <Text size="s" as="p" className="mt-[13px] !font-normal">
                              11 : 32
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-[9%] mt-[19px] gap-2.5">
                    <Text size="xs" as="p" className="mt-px !text-white-A700">
                      You
                    </Text>
                    <Text size="xs" as="p">
                      11 : 32
                    </Text>
                  </div>
                  <div className="h-14 w-[45%] mt-[3px] relative">
                    <Img
                      src="images/img_rectangle_10.svg"
                      alt="image_seven"
                      className="justify-center h-14 left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[5px]"
                    />
                    <Text
                      as="p"
                      className="justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto !text-blue_gray-100 absolute"
                    >
                      It is a simple and easy-to-use It is a simple and easy-to-use platform..
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start w-[9%] mt-[18px] gap-2.5">
                    <Text size="xs" as="p" className="mt-px !text-white-A700">
                      You
                    </Text>
                    <Text size="xs" as="p">
                      11 : 32
                    </Text>
                  </div>
                  <div className="h-14 w-[45%] mt-[3px] relative">
                    <Img
                      src="images/img_rectangle_10.svg"
                      alt="image_eight"
                      className="justify-center h-14 left-0 bottom-0 right-0 top-0 m-auto absolute rounded-[5px]"
                    />
                    <Text
                      as="p"
                      className="justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto !text-blue_gray-100 absolute"
                    >
                      It is a simple and easy-to-use It is a simple and easy-to-use platform..
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[99%] mt-[63px] gap-[13px]">
                    <Img
                      src="images/img_3d_avatar_of_sm_32x32.png"
                      alt="3davatarofsm"
                      className="h-8 w-8 rounded-[50%]"
                    />
                    <Input
                      name="happy"
                      placeholder="Type Something..."
                      prefix={<Img src="images/img_happy.png" alt="Happy" className="w-6 h-6" />}
                      suffix={<Img src="images/img_sent.png" alt="Sent" className="w-6 h-6" />}
                      className="w-[94%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[21%] p-[9px] border-gray-900_01 border border-solid bg-gray-900" id="groupInfoContainer">
            <div className="flex flex-col items-center justify-start w-[86%] mt-[27px]">
              <div className="flex flex-row justify-between items-center w-[96%]">
                <Text size="lg" as="p" className="!text-cyan-700">
                  Group Info
                </Text>
                <Text size="lg" as="p" className="!text-cyan-700 tracking-[-2.08px] !font-koho text-center !font-light">
                  X
                </Text>
              </div>
              <div className="h-px w-full mt-[19px] bg-gray-900_04" />
              <div className="flex flex-col items-center justify-start w-full mt-[54px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="h-[138px] w-[138px] bg-gradient rounded-[50%]" />
                  <Text size="xl" as="p" className="mt-[9px] !text-white-A700">
                    Aden’s Room
                  </Text>
                  <div className="flex flex-col items-start justify-start w-full mt-[31px]">
                    <Text size="lg" as="p" className="!text-white-A700">
                      Description
                    </Text>
                    <Text as="p" className="mt-[7px]">
                      It is a simple and easy-to-use platform that is perfect for both beginners and experienced crypto
                      users. 
                    </Text>
                    <div className="flex flex-row justify-start items-center mt-[21px] gap-[17px]">
                      <Text size="lg" as="p" className="!text-cyan-700 !font-medium">
                        Invite link
                      </Text>
                      <Img src="images/img_frame_20.svg" alt="image_nine" className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px w-full mt-16 bg-gray-900_04" />
              <div className="flex flex-row justify-between items-start w-full mt-2">
                <Text size="lg" as="p" className="mt-2 !text-cyan-700">
                  11 Joined
                </Text>
                <Text size="xl" as="p" className="!text-cyan-700 tracking-[-4.16px] !font-normal">
                  . . .
                </Text>
              </div>
              <div className="h-[349px] w-full mt-[11px] relative">
                <Button className="right-0 top-[4%] m-auto min-w-[70px] absolute">Owner</Button>
                <div className="flex flex-col justify-center w-full pb-[89px] pr-[89px] gap-5 left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <div className="flex flex-row justify-start items-center w-[72%] mr-[39px] gap-[11px]">
                    <Img
                      src="images/img_3d_avatar_of_sm_45x45.png"
                      alt="aden_one"
                      className="h-[45px] w-[45px] rounded-[50%]"
                    />
                    <Text size="lg" as="p" className="!text-cyan-700">
                      Aden
                    </Text>
                  </div>
                  <div className="w-full h-px bg-gray-900_04" />
                  <div className="flex flex-row justify-start items-center w-full gap-[11px]">
                    <Img
                      src="images/img_3d_avatar_of_sm_3.png"
                      alt="3davatarofsm"
                      className="h-[45px] w-[45px] rounded-[50%]"
                    />
                    <Text size="lg" as="p" className="!text-cyan-700">
                      Solem Gor
                    </Text>
                  </div>
                  <div className="w-full h-px bg-gray-900_04" />
                  <div className="flex flex-row justify-start items-center w-full mb-[85px] gap-[11px]">
                    <Img
                      src="images/img_3d_avatar_of_sm_4.png"
                      alt="3davatarofsm"
                      className="h-[45px] w-[45px] rounded-[50%]"
                    />
                    <Text size="lg" as="p" className="!text-cyan-700">
                      Selena Rei
                    </Text>
                  </div>
                </div>
              </div>
              <Button
                color="gray_900_03"
                size="sm"
                className="w-full mt-2 font-semibold border-red-800_42 border border-solid !rounded-[10px]"
              >
                Leave room
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
