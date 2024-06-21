const root: HTMLDivElement = document.querySelector(":root")!;

export default class CursorStates {
  public static link() {
    root.style.setProperty("--cursor-scale", "2");
  }

  public static reset() {
    root.style.setProperty("--cursor-scale", "1");
  }
}
