import React from "react";
import { delay, motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Newsletter = () => {
  return (
    <div className="max-w-[700px] mx-auto space-y-5 py-8 min-h-screen flex flex-col justify-start pt-20">
      <motion.h1
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="text-3xl font-bold font-serif text-center"
      >
        SmartPaper
      </motion.h1>
      <motion.p
        variants={SlideUp(0.4)}
        initial="initial"
        whileInView="animate"
        className="max-w-[450px] mx-auto text-gray-500 text-sm text-center"
      >
        使用说明： 1. 输入arXiv论文URL 2. 选择合适的提示词模板 3. 点击"开始分析"按钮 4. 等待分析完成后可下载结果
      </motion.p>
      {/* form here */}
      <motion.div
        variants={SlideUp(0.6)}
        initial="initial"
        whileInView="animate"
        className="!mt-8 flex justify-center"
      >
        <div className="w-full max-w-[640px] mx-auto">
          <div className="flex border-2 border-black">
            <input
              type="text"
              placeholder="输入url"
              className="w-full px-4 py-3 outline-none border-none"
            />
            <button className="bg-black text-white px-10 py-3 text-lg font-medium">
              开始分析
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Newsletter;
