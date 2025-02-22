import { describe, expect, it } from "vitest";
import { player as reducer, play, next } from "./player";

const exampleState = {
  course: {
    modules: [
      {
        id: "1",
        title: "Iniciando com React",
        lessons: [
          { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
          {
            id: "w-DW4DhDfcw",
            title: "Estilização do Post",
            duration: "10:05",
          },
        ],
      },
      {
        id: "2",
        title: "Estrutura da aplicação",
        lessons: [
          {
            id: "gE48FQXRZ_o",
            title: "Componente: Comment",
            duration: "13:45",
          },
          { id: "Ng_Vk4tBl0g", title: "Responsividade", duration: "10:05" },
        ],
      },
    ],
  },
  isLoading: false,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
};

describe("player slide", () => {
  it("should be able to play", () => {
    const state = reducer(exampleState, play([1, 2]));

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(2);
  });

  it("should be able to play next video automatically", () => {
    const state = reducer(exampleState, next());

    expect(state.currentLessonIndex).toEqual(1);
  });

  it("should be able to jump to the next module automatically", () => {
    const state = reducer(
      {
        ...exampleState,
        currentLessonIndex: 1,
      },
      next()
    );

    expect(state.currentLessonIndex).toEqual(0);
    expect(state.currentModuleIndex).toEqual(1);
  });

  it("should be able to stay the same module when is the last lesson of the last module", () => {
    const state = reducer(
      {
        ...exampleState,
        currentLessonIndex: 1,
        currentModuleIndex: 1,
      },
      next()
    );

    expect(state.currentLessonIndex).toEqual(1);
    expect(state.currentModuleIndex).toEqual(1);
  });
});
