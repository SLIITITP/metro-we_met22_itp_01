import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function PopoverPosition(props) {
  return (
    <>
      {["bottom"].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3">{props.viewName}</Popover.Header>
              <Popover.Body>{props.msg}</Popover.Body>
            </Popover>
          }
        >
          <Button variant="btn btn-primary btn-sm">{props.btnName}</Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default PopoverPosition;
