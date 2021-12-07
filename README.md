- vue3 template
- tailwindcss jit mode
- laravel mix
- yarn berry

2021-12에 오픈한 sage 10 beta-02 버전으로 구성하고싶었지만 컴파일하는 것을 laravel mix에서 bud로 옮겨가며 공식문서에 대한 내용이 얼마 없어서 sage 10 beta-01 버전으로 구성하였다.

https://github.com/alithedeveloper/sage-vue-tailwind.git

참고하여 제작하였지만

해당 저장소는 tailwindcss의 jit 모드를 사용하지 않아서 Postcss 8 에러가 문제였다. Postcss 8문제는 vue2를 사용하면서 vue-template-compiler가 Postcss 7을 사용하면서 생기는 문제였던 것같다.

vue3와 taildinwcss jit를 사용하니 해당 문제는 해결했다.
