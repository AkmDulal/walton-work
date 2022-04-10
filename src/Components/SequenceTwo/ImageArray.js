import { SequenceTwoImg } from "../../images";
import { useImage } from "../hooks";

const SequenceTwoImgArray = () => {
  const [AA0, AA0S] = useImage(SequenceTwoImg[0]);
  const [AA1, AA1S] = useImage(SequenceTwoImg[1]);
  const [AA2, AA2S] = useImage(SequenceTwoImg[2]);
  const [AA3, AA3S] = useImage(SequenceTwoImg[3]);
  const [AA4, AA4S] = useImage(SequenceTwoImg[4]);
  const [AA5, AA5S] = useImage(SequenceTwoImg[5]);
  const [AA6, AA6S] = useImage(SequenceTwoImg[6]);
  const [AA7, AA7S] = useImage(SequenceTwoImg[7]);
  const [AA8, AA8S] = useImage(SequenceTwoImg[8]);
  const [AA9, AA9S] = useImage(SequenceTwoImg[9]);

  const [AA10, AA10S] = useImage(SequenceTwoImg[10]);
  const [AA11, AA11S] = useImage(SequenceTwoImg[11]);
  const [AA12, AA12S] = useImage(SequenceTwoImg[12]);
  const [AA13, AA13S] = useImage(SequenceTwoImg[13]);
  const [AA14, AA14S] = useImage(SequenceTwoImg[14]);
  const [AA15, AA15S] = useImage(SequenceTwoImg[15]);
  const [AA16, AA16S] = useImage(SequenceTwoImg[16]);
  const [AA17, AA17S] = useImage(SequenceTwoImg[17]);
  const [AA18, AA18S] = useImage(SequenceTwoImg[18]);
  const [AA19, AA19S] = useImage(SequenceTwoImg[19]);



  const newImages = Array.of(
    [AA0, AA0S],
    [AA1, AA1S],
    [AA2, AA2S],
    [AA3, AA3S],
    [AA4, AA4S],
    [AA5, AA5S],
    [AA6, AA6S],
    [AA7, AA7S],
    [AA8, AA8S],
    [AA9, AA9S],
    [AA10, AA10S],
    [AA11, AA11S],
    [AA12, AA12S],
    [AA13, AA13S],
    [AA14, AA14S],
    [AA15, AA15S],
    [AA16, AA16S],
    [AA17, AA17S],
    [AA18, AA18S],
    [AA19, AA19S],

  );
  return newImages;
};

export default SequenceTwoImgArray;
