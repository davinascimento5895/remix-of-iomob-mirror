import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-muted p-4">
          <div className="text-center max-w-md">
            <h1 className="mb-4 text-4xl font-bold text-destructive">Oops!</h1>
            <p className="mb-4 text-xl text-muted-foreground">Algo deu errado.</p>
            <p className="mb-8 text-sm text-muted-foreground opacity-70">
              {this.state.error?.message || "Erro desconhecido"}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
