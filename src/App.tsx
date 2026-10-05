import { convertAdToBs } from "./conversion";
import { fromNow } from "./features";

function App() {

  const bs = convertAdToBs("2025-11-13")

  return (
    <div>
      {bs.formatted.en}
      <>{fromNow('2023-9-13')}</>
    </div>
  )
}

export default App
