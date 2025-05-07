import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
import "./App.css";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkAtomCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const [messagingAtomCount, setMessagingAtomCount] =
    useRecoilState(messagingAtom);

  const totalNotificationSelectorCount = useRecoilValue(
    totalNotificationSelector
  );
  return (
    <>
      <button>Home</button>

      <button>
        My network ({networkAtomCount >= 100 ? "99+" : networkAtomCount})
      </button>
      <button>Jobs({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>

      <button
        onClick={() => {
          setMessagingAtomCount((c) => c + 1);
        }}
      >
        Me ({totalNotificationSelectorCount})
      </button>
    </>
  );
}

export default App;
