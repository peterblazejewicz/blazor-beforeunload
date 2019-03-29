class BeforeUnloadAdapter {
  private instance: any | undefined;

  constructor() {
    this.beforeUnloadHandler = this.beforeUnloadHandler.bind(this);
    this.addEventListener = this.addEventListener.bind(this);
    this.removeEventListener = this.removeEventListener.bind(this);
  }

  addEventListener(instance: any) {
    this.removeEventListener();
    this.instance = instance;
    window.addEventListener("beforeunload", this.beforeUnloadHandler, false);
  }

  removeEventListener() {
    window.removeEventListener("beforeunload", this.beforeUnloadHandler, false);
  }

  beforeUnloadHandler(e: BeforeUnloadEvent) {
    if (this.instance) {
      const args = this.instance.invokeMethod("OnBeforeUnload", e);
      if (args) {
        e.preventDefault();
        e.returnValue = args.returnValue;
      }
    }
  }
}

interface Window {
  BeforeUnloadAdapter: BeforeUnloadAdapter;
}

window.BeforeUnloadAdapter =
  window.BeforeUnloadAdapter || new BeforeUnloadAdapter();
