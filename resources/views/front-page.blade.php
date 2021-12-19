@extends('layouts.app')

@section('content')


<div class="relative flex items-top justify-center bg-gray-100 sm:items-center py-4 sm:pt-0 h-full">
  <div class="grid grid-cols-[auto,auto] gap-[1px] bg-gray-200 border border-gray-200">
      <div class="bg-white min-h-[60px] flex items-center p-[18px]">
        <h2>Vue3 example</h2>
      </div>
      <div id="vue-app" class="bg-white min-h-[60px] flex items-center p-[18px]">
        <vue-app />
      </div>
      <div class="bg-white min-h-[60px] flex items-center p-[18px]">
        <h2>React App</h2>
      </div>
      <div class="bg-white min-h-[60px] flex items-center p-[18px]">
        <div id="react-app"></div>
      </div>
  </div>
</div>

@endsection