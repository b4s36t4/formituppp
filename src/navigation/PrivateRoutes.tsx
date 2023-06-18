import { useAuthProvider } from "@/Provider/Auth/hook";
import { GraphProvider } from "@/Provider/GraphProvider";
import { ResendVerifyMail } from "@/components/modals/ResendVerifyMail";
import { useRedirectAuth } from "@/hooks/useRedirectonAuth";
import { CreateFlow } from "@/pages/CreateFlow";
import { Route, Routes } from "react-router-dom";
import { ReactFlowProvider } from "reactflow";

export const PrivateRoutes = () => {
  useRedirectAuth(true);

  const { verified, resendVerifyEmail } = useAuthProvider();

  if (!verified) {
    return (
      <div className="flex items-center justify-center h-full">
        <ResendVerifyMail open={true} onClick={resendVerifyEmail} />
      </div>
    );
  }

  return (
    <Routes location={"/form/create"}>
      <Route
        path="/form/create"
        element={
          <ReactFlowProvider>
            <GraphProvider>
              <CreateFlow />
            </GraphProvider>
          </ReactFlowProvider>
        }
      />
      <Route path="/" element={<p>Flows</p>} />
    </Routes>
  );
};
