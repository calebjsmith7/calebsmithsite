// src/components/TestIcon.js

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";

export default function TestIcon() {
  return (
    <div>
      <h2>Testing FontAwesome Icons</h2>
      <FontAwesomeIcon icon={faSmile} size="2x" style={{ color: "white" }} />
      <FontAwesomeIcon icon={faSmile} size="lg" />
    </div>
  );
}
