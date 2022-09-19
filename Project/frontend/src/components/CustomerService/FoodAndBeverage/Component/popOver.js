import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function PopoverPositionedExample(props) {
  return (
    <>
      {["bottom"].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3">Notes</Popover.Header>
              <Popover.Body>{props.msg}</Popover.Body>
            </Popover>
          }
        >
          <Button variant="btn btn-primary btn-sm">View Notes</Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default PopoverPositionedExample;