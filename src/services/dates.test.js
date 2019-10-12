import {
  getDaysPreviousMonth,
  getDaysCurrentMonth,
  getDaysFollowingMonth
} from "./dates";

describe("get the days of the last week of the previous month", function() {
  it("in October", function() {
    const expectedDays = [29, 30];

    const today = new Date("2019/10/12");

    const days = getDaysPreviousMonth(today);

    expect(days).toEqual(expectedDays);
  });

  it("in March", function() {
    const expectedDays = [24, 25, 26, 27, 28];

    const today = new Date("2019/03/12");

    const days = getDaysPreviousMonth(today);

    expect(days).toEqual(expectedDays);
  });

  it("in January", function() {
    const expectedDays = [30, 31];

    const today = new Date("2019/01/12");

    const days = getDaysPreviousMonth(today);

    expect(days).toEqual(expectedDays);
  });
});

describe("get the days of the current month", function() {
  it("in March", function() {
    const expectedDays = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ];

    const today = new Date("2019/03/12");

    const days = getDaysCurrentMonth(today);

    expect(days).toEqual(expectedDays);
  });

  it("in December", function() {
    const expectedDays = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ];

    const today = new Date("2019/12/01");

    const days = getDaysCurrentMonth(today);

    expect(days).toEqual(expectedDays);
  });
});

describe("get the first days of the first week of the following month", function() {
  it("in november", function() {
    const expectedDays = [1, 2, 3, 4, 5, 6, 7];

    const today = new Date("2019/11/15");

    const days = getDaysFollowingMonth(today);

    expect(days).toEqual(expectedDays);
  });

  it("in December", function() {
    const expectedDays = [1, 2, 3, 4];

    const today = new Date("2019/12/12");

    const days = getDaysFollowingMonth(today);

    expect(days).toEqual(expectedDays);
  });

  it("in January", function() {
    const expectedDays = [1, 2];

    const today = new Date("2019/01/12");

    const days = getDaysFollowingMonth(today);

    expect(days).toEqual(expectedDays);
  });

  it("in February", function() {
    const expectedDays = [1, 2];

    const today = new Date("2019/02/12");

    const days = getDaysFollowingMonth(today);

    expect(days).toEqual(expectedDays);
  });
});
describe("get the five or six weeks of  given day", function() {
  it("in January", function() {
    const expectedDays = [
      30,
      31,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      1,
      2
    ];

    const today = new Date("2019/01/12");

    const days = [
      ...getDaysPreviousMonth(today),
      ...getDaysCurrentMonth(today),
      ...getDaysFollowingMonth(today)
    ];

    expect(days).toEqual(expectedDays);
  });

  it("in march", function() {
    const expectedDays = [
      24,
      25,
      26,
      27,
      28,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      1,
      2,
      3,
      4,
      5,
      6
    ];

    const today = new Date("2019/03/12");

    const days = [
      ...getDaysPreviousMonth(today),
      ...getDaysCurrentMonth(today),
      ...getDaysFollowingMonth(today)
    ];

    expect(days).toEqual(expectedDays);
  });
});
