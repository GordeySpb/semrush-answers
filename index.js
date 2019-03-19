/**
 * 1. В моём репозитории есть проет GordeySpb.github.io в нём можно посмотреть примеры верстки.
 * 
 * 2. Знаком с библиотекой React, Redux, StyledComponents, знаком с SCSS, знаю для чего нужен БЭМ.
 * 
 * 3. Немного писал на TypeScript
 * 
 * 
 */

// Кастомная реализация метода bind

function bind(method, context) {
  // в переменную args записываются дополнительные аргумены начиная с 2 индекса(которые берутся из псевдомассива arguments)
  var args = Array.prototype.slice.call(arguments, 2); 
  
  
  return function() {
    // в переменную а присваивается массив состоящий из элементов псевдомассива arguments и элементов массива args
    var a = args.concat(Array.prototype.slice.call(arguments, 0));
    // возвращается результат работы функции method(он вызывается в переданном контексте c массивом a)
    return method.apply(context, a);
  }
}

const InArray = (val, arr) => !!~arr.indexOf(val);


Array.prototype.InArray = function(val) {
  return !!~this.indexOf(val);
};
