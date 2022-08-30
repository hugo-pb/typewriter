const sentence = "hello there from lighthouse labs";

const func = index => {
  if (index > sentence.length - 1) {
    return;
  }
  setTimeout(() => {
    process.stdout.write(sentence[index]);
    index++;
    func(index);
  }, 500);
};

func(0);
