<template>
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <el-tab-pane label="气温" name="1">
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;大气层中气体的温度是气温，是气象学常用名词。
        它直接受日射所影响：日射越多，气温越高。中国以摄氏温标（℃）表示。
        气象部门所说的地面气温，就是指高地面约1.5m处百叶箱中的温度。
      </div>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;气象台站用来测量近地面空气温度的主要仪器是
        装有水银或酒精的玻璃管温度表。因为温度表本身吸收太阳热量的能力比空气
        大，，晒下指示的读数往往高于它周围空气的实际温度，所以测量近地面空气
        温度时，通常都把温度表放在离地约1.5m处四面通风的百叶箱里
      </div>
    </el-tab-pane>
    <el-tab-pane label="体感温度" name="2">
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;空气对热的吸收会受到相对湿度及其密度影响；
        而风速会影响到与人体表面可以接触到的空气的分量，当风速增加时，与人
        体所接触的空气会增加，所以其所带走或带来的热量亦相应地增加，这现象
        便是“风寒指数”。因此，在天气报告里，会把这两个变数带来的影响计算进
        “酷热指数”里。一般来说，当空气密度及湿度增加，都会使酷热指数增加。
      </div>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;人体等于浸泡在空气的水分子中，所以比体温
        高温的水分子会阻碍人体散热，而比体温低温的水分子会加速人体散热，
        湿度愈高空气中的水分子浓度愈高，水分子所造成的效应也愈明显。
      </div>
    </el-tab-pane>
    <el-tab-pane label="汽压" name="3">
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;气压是作用在单位面积上的大气压力，即在数值
        上等于单位面积上向上延伸到大气上界的垂直空气柱所受到的重力。著名的马
        德堡半球实验证明了它的存在。气压的国际制单位是帕斯卡，简称帕，符号是
        Pa。气象学中，人们一般用千帕（kPa）、或使用百帕（hpa）作为单位。其它
        的常用单位分别是：巴（bar，1bar=100,000帕）和厘米水银柱（或称厘米汞柱
        ）。气压不仅随高度变化，也随温度而异。气压的变化与天气变化密切相关。
      </div>
    </el-tab-pane>
    <el-tab-pane label="海平面汽压" name="4">
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;海平面气压指的是面积上从海平面到大气上界空
        气柱的重量。平均海平面气压资料是气候及天气分析研究中的一项基本资料。
      </div>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;通常情况下是温度15摄氏度（59华氏度）条件
        下，29.92”英寸汞柱（1013.2hPa）由本站气压推算到平均海平面上的气压值。
      </div>
    </el-tab-pane>
    <el-tab-pane label="水汽压" name="5">
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;水汽压（e）是空气中水汽所产生的分压力(分压强)
        。国际制单位为百帕(hPa)。
      </div>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;水汽压是间接表示大气中水汽含量的一个量。
        大气中水汽含量多时，水汽压就大；反之，水汽压就小。
      </div>
    </el-tab-pane>
    <el-tab-pane label="相对湿度" name="6">
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;相对湿度，指空气中水汽压与相同温度下饱和水汽压的
        百分比。或湿空气的绝对湿度与相同温度下可能达到的最大绝对湿度之比。也可表示
        为湿空气中水蒸气分压力与相同温度下水的饱和压力之比。
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped>
</style>

<script>
export default {};
</script>
