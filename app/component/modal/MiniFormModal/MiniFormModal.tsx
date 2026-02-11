
"use client";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { useEffect } from "react";
import { FormBox } from '@/main/Section06/client'
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./MiniFormModal.module.css"


// miniForm 수정 시 확인 파일

// section6 client.tsx, section6.module.scss : 
// 1. miniForm props 받아서 스타일 및 motion 애니메이션 작동 변경.
// 2. 문의 작성 버튼 눌렀을때 미니폼 모달 닫기 처리 되어 있음. 

// BottomForm.tsx : niceModal.show 작동

// 입지조건쪽 창업 상담하기 버튼 : niceModal.show 작동


export default NiceModal.create(()=> {
   const modal = useModal();
   const isMobile = useMediaQuery({ query: "(max-width: 992px)" });
   const handleClose = () => {
      modal.hide();
      // 애니메이션이 없다면 바로 remove, 있다면 transition 종료 후 호출하는게 정석입니다.
   };

   useEffect(()=> {
      if (isMobile && modal.visible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
   
      // 컴포넌트가 사라질 때 스크롤을 원래대로 복구 (매우 중요!)
      return () => {
        document.body.style.overflow = 'unset';
      };
   }, [isMobile, modal])

   return (
      <AnimatePresence onExitComplete={() => modal.remove()}>
         {modal.visible &&(
            <div className={styles.modal_bg}>
               <div onClick={()=> handleClose()} className={styles.bg_close_layer}></div>
               <motion.div 
                  className={styles.Form_layer}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
               >
                  <h3 className="paperLogy">창업상담 신청</h3>
                  <div className={styles.Form_body}>
                     <FormBox miniForm={true} />
                  </div>
   
                  <button 
                     onClick={()=> {
                        handleClose();
                     }} 
                     className={styles.close_btn}
                  >
                     <img src="/img/close_icon.png" alt="닫기 버튼" />
                  </button>
               </motion.div>
            </div>
            // setFormOpen={setFormOpen}
         )}
      </AnimatePresence>
   )
})