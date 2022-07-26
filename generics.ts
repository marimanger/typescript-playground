function logTime<T>(num: T): T {
  console.log(num);
  return num;
}

logTime<number>(1);
logTime<string>("1");
logTime<boolean>(true);
logTime<object>({});

function logTime2<T>(num: T): T {
  if (typeof num === "string") {
    num.toLocaleUpperCase();
  }
  return num;
}

interface MyInterface {
  transform: <T, F>(a: T) => F;
}

interface Timestamp {
  stamp: number;
}

function logTimeStamp<T extends Timestamp>(num: T) {
  //extends our timestamp means we can assess stamp number
  console.log(num.stamp);
  return num;
}
