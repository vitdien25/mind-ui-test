import { Button, message } from "antd";
import styles from "./Card.module.scss";
import { MdOutlineContentCopy } from "react-icons/md";

interface CopyBoxProps {
  value: string;
}

const CopyBox = ({ value }: CopyBoxProps) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    message.success("Copied to clipboard");
  };

  return (
    <div className={styles.copyBox}>
      <pre className={styles.textBlock}>{value}</pre>

      <Button
        type="text"
        icon={<MdOutlineContentCopy size={18} />}
        onClick={handleCopy}
        className={styles.copyButton}
      />
    </div>
  );
};

export default CopyBox;
