import ProgressBar from "@ramonak/react-progress-bar";

const Progress = ({ completed }) => {
  return (
    <ProgressBar
      completed={completed}
      bgColor="#09cc7f"
      height="12px"
      isLabelVisible={true}
      labelColor="#09cc7f"
      labelAlignment="outside"
    />
  );
};

export default Progress;
