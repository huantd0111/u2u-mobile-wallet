import { usePreference } from '../../hook/usePreference';
import React, { useCallback, useMemo, useRef } from "react";
import ModalContent from './ModalContent';
import CustomBottomSheetModal from '../CustomBottomSheetModal';
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const ManageTokenModal = ({trigger}: {
  trigger: () => JSX.Element,
}) => {
  const {preferenceTheme} = usePreference()
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['75%'], []);

  const handleClose = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);


  return (
    <CustomBottomSheetModal
      modalRef={bottomSheetModalRef}
      title='manageToken'
      trigger={trigger()}
      triggerModal={<ModalContent onClose={handleClose}/>}
      snapPoints={snapPoints}
      hasSeparator={false}
    />
  )
}

export default ManageTokenModal;
