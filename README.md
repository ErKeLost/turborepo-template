

# 1. 2022 年了，扩展你代码库的最好方式 🚀🚀

## 1.1 什么是 monorepo ?

Monorepo 是一种项目管理方式，在 Monorepo 之前，代码仓库管理方式是 MultiRepo，即每个项目都对应着一个单独的代码仓库每个项目进行分散管理
这就会导致许多弊端，例如可能每个项目的基建以及工具库都是差不多的，基础代码的重复复用问题等等...

Monorepo 就是把多个项目放在一个仓库里面, 关于 monorepo 的文章已经很多了，并且目前可以搭建 Monorepo 的工具也很多，例如

| 工具                                | 简述                                                   |
| ----------------------------------- | ------------------------------------------------------ |
| [Bit](https://bit.dev/)             | 用于组件驱动开发的工具链                               |
| [Turborepo](https://turborepo.org/) | 用于 JavaScript 和 TypeScript 代码库的高性能构建系统。 |
| [Rush](https://rushjs.io/)          | 一个可扩展的 web 单仓库管理器。                        |
| [Nx](https://nx.dev/)               | 具有一流的 monorepo 支持和强大集成的下一代构建系统。   |
| [Lerna](https://www.lernajs.cn/)    | 用于管理包含多个软件包的项目                           |

我们今天为大家带来高性能的构建 Monorepo 工具，[Turborepo ](https://turborepo.org/)

# 2. TurboRepo

## 2.1 什么是 Turborepo

TurboRepo 是构建 Javascript，Typescript 的 monorepo 高性能构建系统,Turborepo 抽象出所有烦人的配置、脚本和工具，减少项目配置的复杂性，可以让我们专注于业务的开发

我们通常在构建 monorepo 时需要搭配适当的工具来扩展 monorepo，Turborepo 利用先进的构建技术和思想来加速开发，构建了无需配置复杂的工作，只需要我们通过脚本和工具，即可快速搭建您的 Monorepo TurboRepo 支持使用 Yarn Npm Pnpm，
我们本次使用 Pnpm 来带大家领略 Tuborepo 的魅力！

## 2.2 TurboRepo 的优势

### 2.2.1 多任务并行处理

Turbo 支持多个任务的并行运行，我们在对多个子包，编译打包的过程中，turbo 会同时进行多个任务的处理

在传统的 monorepo 任务运行器中，就像`lerna`或者`yarn`自己的内置`workspaces run`命令一样，每个项目的 script 生命周期脚本都以[拓扑](https://turborepo.org/docs/glossary#topological-order)方式运行（这是“依赖优先”顺序的数学术语）或单独并行运行。根据 monorepo 的依赖关系图，CPU 内核可能处于空闲状态——这样就会浪费宝贵的时间和资源。[](https://turborepo.org/docs/glossary#topological-order)

> 什么是拓扑 ？ </br>
> 拓扑 [Topological Order](https://turborepo.org/docs/glossary#topological-order)
> 是一种排序 拓扑排序是依赖优先的术语， 如果 A 依赖于 B，B 依赖于 C，则拓扑顺序为 C、B、A。
>
> 比如一个较大的工程往往被划分成许多子工程，我们把这些子工程称作**活动**(activity)。在整个工程中，有些子工程(活动)必须在其它有关子工程完成之后才能开始，也就是说，一个子工程的开始是以它的所有前序子工程的结束为先决条件的

为了可以了解`turbo`多么强大，下图比较了`turbo`vs`lerna`任务执行时间线：

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a6b62020709479f800e6ee07b160a30~tplv-k3u1fbpfcp-watermark.image?)

`Turbo`它能够有效地安排任务类似于瀑布可以同时异步执行多个任务，而`lerna`一次只能执行一项任务 所以`Turbo`的 性能不言而喻。

### 2.2.2 更快的增量构建

如果我们的项目过大，构建多个子包会造成时间和性能的浪费，turborepo 中的缓存机制 可以帮助我们记住构建内容 并且跳过已经计算过的内容，优化打包效率。

### 2.2.3 云缓存

Turbo 通过其远程缓存功能可以帮助多人远程构建云缓存实现了更快的构建。

### 2.2.4 任务管道

用配置文件定义任务之间的关系，然后让 Turborepo 优化构建内容和时间。

### 2.2.5 基于约定的配置

通过约定降低复杂性，只需几行 JSON 即可配置整个项目依赖，执行脚本的顺序结构。

### 2.2.6 浏览器中的配置文件

生成构建配置文件并将其导入 Chrome 或 Edge 以了解哪些任务花费的时间最长。

# 3 Turbo 核心概念

## 3.1 管道 （Pipeline）

Turborepo 为开发人员提供了一种以常规方式显式指定任务关系的方法。

1. 新来的开发人员可以查看 Turborepo`pipeline`并了解任务之间的关系。
2. `turbo`可以使用这个显式声明来执行基于多核处理器的丰富可用性的优化和计划执行。

`turbo`在定义 monorepo 的任务依赖关系图，我们需要在根目录定义`turbo.json` 执行各种调度，输出，缓存依赖， 打包等功能

`turbo.json`位于 turborepo 项目根目录接下来实战的部分会带领大家从头创建一个项目

在`pipeline`中的每一个 key 都指向我们在`package.json`中定义的 script 脚本执行命令,并且在`pipeline`中的每一个 key 都是可以被`turbo run`所执行 执行[`pipeline`](https://turborepo.org/docs/features/pipelines)的脚本的名称。您可以使用其下方的键以及与[缓存](https://turborepo.org/docs/features/caching)相关的一些其他选项来指定其依赖项。

在我们执行`turbo run ***`命令的时候 turbo 会根据我们定义的 [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
里对命令的各种配置去对我们的每个**package**中的`package.json 中 对应的script`执行脚本进行有序的执行和缓存输出的文件。

```js
// turbo.json
{
  "$schema": "https://turborepo.org/schema.json",
  "pipeline": {
    "build": {
      // A package's `build` script depends on that package's
      // dependencies' and devDependencies'
      // `build` tasks  being completed first
      // (the `^` symbol signifies `upstream`).
      "dependsOn": ["^build"],
      // note: output globs are relative to each package's `package.json`
      // (and not the monorepo root)
      "outputs": [".next/**"]
    },
    "test": {
      // A package's `test` script depends on that package's
      // own `build` script being completed first.
      "dependsOn": ["build"],
      "outputs": [],
      // A package's `test` script should only be rerun when
      // either a `.tsx` or `.ts` file has changed in `src` or `test` folders.
      "inputs": ["src/**/*.tsx", "src/**/*.ts", "test/**/*.ts", "test/**/*.tsx"]
    },
    "lint": {
      // A package's `lint` script has no dependencies and
      // can be run whenever. It also has no filesystem outputs.
      "outputs": []
    },
    "deploy": {
      // A package's `deploy` script depends on the `build`,
      // `test`, and `lint` scripts of the same package
      // being completed. It also has no filesystem outputs.
      "dependsOn": ["build", "test", "lint"],
      "outputs": []
    }
  }
}
```

<br/>接下来我们来解析每一个对象中的 key 到底是用来做什么的帮助我们更好的理解`pipeline`

### 3.1.1 DependsOn (依赖于)

比如当前我们有三个子包 package 两个工具 package 一个 playground 用于测试其余两个 package

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f688a8bc82d54482943c6b2e2e6bdd51~tplv-k3u1fbpfcp-watermark.image?)

```js
  "pipeline": {
    "build": {
      "dependsOn": ["^build"]
    }
  }
```

### 3.1.2 常规依赖

如果一个任务的执行，只依赖自己包其他的任务，那么可以把依赖的任务放在 dependsOn 数组里

```js
{
    "turbo": {
        "pipeline": {
            "deploy": {
                "dependsOn": ["build", "test", "lint"]
            }
        }
    }
}
```

### 3.1.3 拓扑依赖

可以通过`^`符号来显式声明该任务具有拓扑依赖性，需要依赖的包执行完相应的任务后才能开始执行自己的任务

```
{
    "turbo": {
        "pipeline": {
            "build": {
                "dependsOn": ["^build"],
            }
        }
    }
}
```

因为 playground 依赖于@relaxed/utils 和@relaxed/hook，所以我们当前 playground 子包的 build 存在依赖关系，根据 build 的 dependsOn 配置，会先执行依赖项的 build 命令，也就是@relaxed/utils 和@relaxed/hook 的 build 命令，依赖项执行完后才会执行 playground 的 build 命令。
如果我们不添加`"dependsOn": ["^build"]`数组中的`‘^’`那么就代表我们当前只需要执行我们自己的 build 命令

`dependsOn`  表示当前命令所依赖的命令，`^`  表示  `dependencies`  和  `devDependencies`  的所有依赖都执行完  `build`，才执行  `build`

### 3.1.4 空依赖

如果一个任务的 dependsOn 为`[]` 或者不声明这个属性，那么表明这个任务可以在任意时间被执行

### 3.1.5 Output

`outputs`  表示命令执行输出的文件缓存目录

默认值为`["dist/**", "build/**"]`

我们还可以通过传递一个空数组用来告诉`turbo`任务是一个副作用，这样我们不会输入任何文件

```
"pipeline": {
  "build": {
    // "Cache all files emitted to package's dist/** or .next
    // directories by a `build` task"
    "outputs": ["dist/**", ".next/**"],
    "dependsOn": ["^build"]
  },
 }
```

### 3.1.6 Cache

`cache`  表示是否缓存，通常我们执行  `dev`  命令的时候会结合  `watch`  模式，所以我们一般在项目启动模式下不需要开启 `turbo` 缓存机制

```
{
  "$schema": "https://turborepo.org/schema.json",
>>>>>>> 32ee3ac0ec0063a855db245ef399134786f3ca46
  "pipeline": {
    "dev": {
      "cache": false
    }
  }
}
<<<<<<< HEAD
复制代码
3.1.7 Input
默认为[]。告诉turbo在确定特定任务的包是否已更改时要考虑的文件集。将其设置为文件输入地址将导致仅当与这些真正子包中需要配置输入匹配的文件发生更改时才重新运行任务。例如，如果您想跳过运行测试，除非源文件发生更改，这会很有帮助。
指定[]意味着任务在任何文件发生更改时重新运行。
{
  "$schema": "https://turborepo.org/schema.json",
"pipeline": {
"test": {
// A package's `test` task should only be rerun when
// either a `.tsx` or `.ts` file has changed.
"inputs": ["src/**/_.tsx", "src/\*\*/_.ts", "test/\*_/_.ts"]
}
}
}
复制代码
3.1.8 OutputMode
outputMode 代表输出的模式类型是字符串

typefullnew-onlyhash-onlynone
full 也是默认值代表 显示任务的整个输出
hash-only 仅显示计算的任务哈希

new-only 显示缓存未命中的完整输出和缓存命中的计算哈希值。意思就是返回带有 hash 的日志并且当如果有未命中的子包缓存或者打包错误导致缓存未命中再次打包时会输出上一次缓存未命中的的子包完整任务输出日志
none 使用“none”隐藏任务输出。意思就是不会在控制台中打印我们拓扑顺序以及打包输入的日志，但是依然会正确执行 build 命令
{
"$schema": "https://turborepo.org/schema.json",
"pipeline": {
"build": {
"dependsOn": ["^build"],
"outputMode": "new-only"
},
"test": {
"outputs": [],
"dependsOn": ["build"],
},
}
}
复制代码
3.2 过滤包 （Filtering Packages）
turbo 中第二个核心概念 filtering packages 允许您将任务仅定位到你想要去操作的包。Turborepo 支持一个类似 pnpm 中 --filter 过滤命令但是他不同于传统 pnpm --filter 命令 我们需要在 --filter 后面添加一个等号确定需要对过滤的包进行单独的指令，允许您选择将充当“入口点”的包进入 monorepo 的包/任务图中,您可以通过包名称、包目录、包是否包含依赖项/依赖项以及 git 历史记录的更改来过滤您的项目。
语法 pnpm build --filter=@relaxed/utils

过滤器语法还有很多场景这里就不一一展示具体可见 turbo 过滤包语法
3.3 缓存 （Caching）
Turborepo 检查文件内容变动时，会根据内容生成 Hash 来对比
turbo 它可以缓存发出的文件和以前运行的命令的日志。它这样做是为了跳过已经完成的工作，从而节省大量时间。
例如我们执行三个子包的 build 命令我们只需要执行 turbo run build
turbo 在每次打包的过程中会在每个 build 的子包中生成 log 文件在下一次打包的时候
缓存构建内容，并跳过已经计算过的内容，判断是否需要重新构建
在我们在输入 build 命令的时候首先进入到 pipeline 中查看是否关闭缓存，然后通过当前子包中的 turbo 的 log 文件来 hash 对比当前代码是否有改变 如果没有发生改变那么就 跳过构建

强制覆盖缓存
相反，如果要强制 turbo 重新执行之前缓存的任务，请添加--force 标志： #在所有包和应用中运行`Build`N 脚本 #忽略缓存命中。
turbo run build --force
复制代码
3.4 远程缓存 （Remote Caching）
Turborepo 速度的一个主要关键 🔑 是它既懒惰又高效——它做的工作量尽可能少，并且它试图从不重做以前已经完成的工作。 这是官网对 turbo 远程缓存的一个总结
正常情况下 我们使用 turbo 的时候在构建过程中只能将我们的任务缓存在本地系统上 turbo 支持了一种多人开发共享缓存的模式
开发人员团队和/或持续集成 (CI) 系统使用远程缓存来共享构建输出。如果您的构建是可重现的，那么一台机器的输出可以安全地在另一台机器上重复使用，这可以显着加快构建速度。
如果要将本地 turborepo 链接到远程缓存，请首先使用 Vercel 帐户对 Turborepo CLI 进行身份验证：
npx turbo login
复制代码
接下来，您可以通过运行以下命令将您的 turborepo 链接到远程缓存：
npx turbo link
复制代码
启用后，对当前缓存的包或应用程序进行一些更改，并使用 turbo run.  您的缓存工件现在将存储在本地和您的远程缓存中。
要验证，请使用以下命令删除本地 Turborepo 缓存：
rm -rf ./node_modules/.cache/turbo
复制代码
然后再次运行相同的构建。如果一切正常，turbo 则不应在本地执行任务，而是从远程缓存下载日志和工件并将它们重放给您。 4. 命令行的使用
4.1 选项语法
options 选项语法可以通过 turbo 使用不同的方式来进行传递

传递值的选项

--<option>=<value>
// like
pnpm build --filter=vue-devui

pnpm build --filter=@relaxed/hook
复制代码
4.2 全局参数 （常用命令）
4.2.1 --continue
默认为 false.该标志告诉 turbo 是否在出现错误（即任务的非零退出代码）时继续执行。默认情况下，指定--parallel 标志将自动设置--continue 为，true 除非明确设置为 false。当--continueis 时 true，turbo 将以执行期间遇到的最高退出代码值退出。
turbo run build --continue
复制代码
4.2.2 --parallel
默认 false。脚本程序并行运行命令并忽略依赖关系图。这对于使用实时重新加载进行开发很有用。例如我们启动 vite 项目的时候我们就需要忽略其他可能出现的 dependsOn 依赖关系
"pipeline": {
"build": {
"dependsOn": ["^build"],
"outputs": ["dist/**", "build/**"],
"outputMode": "new-only"
},
"lint": {
"outputs": []
},
"dev": {
"cache": false,
//
"dependsOn": ["^build"]
}
}
}

复制代码
由于我们在 pipeline 中设置了 dependson 的 build 命令依赖优先的问题所以我们可以指定--parallel 并行执行并且阻止默认依赖 build 指令
turbo run lint --parallel --no-cache
turbo run dev --parallel --no-cache
复制代码
4.2.3 --filter
指定包/应用程序、目录和 git 提交的组合作为执行的入口点。
可以组合多个过滤器来选择不同的目标集。此外，过滤器还可以排除目标。匹配任何过滤器且未明确排除的目标将在最终入口点选择中。
有关--filter 标志和过滤的更多详细信息，请参阅我们文档中的专用页面
turbo run build --filter=my-pkg
turbo run test --filter=...^@scope/my-lib
turbo run build --filter=./apps/\* --filter=!./apps/admin
复制代码
4.2.4 --force
忽略现有的缓存工件并强制重新执行所有任务（覆盖重叠的工件）
turbo run build --force
复制代码
4.2.5 --no-cache
默认 false。不要缓存任务的结果。next dev 这对于诸如 or 之类的监视命令很有用 react-scripts start。
turbo run build --no-cache
turbo run dev --parallel --no-cache
复制代码
4.2.6 --only
默认 false。将执行限制为指定 package 中的指定的任务。这与默认情况下如何 lerna 或 pnpm 运行任务的方式非常相似。如果我们指定了 在依赖前需要执行 build 命令 但是如果我们设置 --only 将默认排除 build 命令
鉴于此管道 turbo.json：
{
"$schema": "https://turborepo.org/schema.json",
"pipeline": {
"build": {
"dependsOn": [
"^build"
]
},
"test": {
"dependsOn": [
"^build"
]
}
}
}
复制代码
turbo run test --only
复制代码
将只会执行每个包中的 test 任务。它不会 build。
本文介绍几种常用的 turbo 命令, 当然 turbo 提供了许多在命令行中使用的指令， 具体可以查看
命令行参考 5. Demo 实战 ✨✨
快速开始
我们可以通过现有的 monorepo 改造 也可以 直接创建 turbo 项目，

turbo 的另一大特色就是改造您现有的 monorepo 也很简单， 只需要安装 turbo 依赖 根目录添加 turbo.json 一切就尽在掌握了

我们本次体验一下 使用 turbo 命令行创建项目， demo 仅展示 turbo 和 monorepo 的结合使用方式，具体构建方式，以及完整项目 可以查看 github 模板
我们在命令行输入
npx create-turbo@latest
复制代码
创建我们的工程名

> > > TURBOREPO

> > > Welcome to Turborepo! Let's get you set up with a new codebase.

? Where would you like to create your turborepo? (./my-turborepo)
复制代码
我们推荐使用 Pnpm 构建
? Which package manager do you want to use?
npm

> pnpm
> yarn
> 复制代码
> turbo 会自动根据我们选择的包管理器为我们创建相对应的项目
> 然后我们进入项目

为了更好的体验我们使用 vite 更直观的展示
我们在根目录命令行输入 npm init vue@3 创建一个名为 playground 的 vue 项目

然后在 pnpm-workspace.yaml 中添加一个 playground 字段代表把 playground 包添加到 pnpm monorepo 的管理
packages:

- 'packages/\*'
- 'playground'

复制代码
紧接着在 packages 里面新建 @relaxed/hook, @relaxed/utils, @relaxed/tsconfig 文件夹前两个作为测试工具库 剩下作为我们 tsconfig 共享配置库

@relaxed/utils

根目录新建 index.ts
export function Accumulation(...value: any[]) {
return value.reduce((t, v) => t + v, 0)
}

export function Multiplication(...value: any[]) {
return value.reduce((t, v) => t \* v, 1)
}

复制代码
然后我们在 package.json 为了测试我们使用 tsc 打包新增 build 命令添加 tsc

@relaxed/hook 同理

根目录新建 index.ts
import { ref } from 'vue'
export default function useBoolean(initValue = false) {
const bool = ref(initValue)

function setBool(value: boolean) {
bool.value = value
}
function setTrue() {
setBool(true)
}
function setFalse() {
setBool(false)
}
function toggle() {
setBool(!bool.value)
}
return {
bool,
setBool,
setTrue,
setFalse,
toggle
}
}

复制代码

@relaxed/tsconfig

在 tsconfig 目录下新建 base.json
{
"$schema": "https://json.schemastore.org/tsconfig",
"display": "Default",
"compilerOptions": {
"composite": false,
"declaration": true,
"declarationMap": true,
"esModuleInterop": true,
"forceConsistentCasingInFileNames": true,
"inlineSources": false,
"isolatedModules": true,
"moduleResolution": "node",
"noUnusedLocals": false,
"noUnusedParameters": false,
"preserveWatchOutput": true,
"skipLibCheck": true,
"strict": true
},
"exclude": ["node_modules"]
}

复制代码
package.json 中
{
"name": "@relaxed/tsconfig",
"version": "0.0.0",
"private": true,
"files": [
"base.json"
]
}

复制代码
首先我们需要把 tsconfig 共享模块添加到两个工具库中
可以直接在@relaxed/hook @relaxed/utils 的 package.json 中添加
"devDependencies": {
"@relaxed/tsconfig": "workspace:\*",
"vue": "^3.2.37"
}
复制代码
或者
pnpm add @relaxed/tsconfig --filter=@relaxed/hook

pnpm add @relaxed/tsconfig --filter=@relaxed/utils
复制代码
然后我们如何在 playground 中使用呢？

第一种方法：在 playground 中的 package 中 新增 两个工具子包的依赖项

"dependencies": {
"@relaxed/hook": "workspace:1.0.0",
"@relaxed/utils": "workspace:\*"
},
复制代码
然后我们执行
pnpm install

第二种方法： 我们直接通过命令安装

pnpm add @relaxed/utils @relaxed/hook --filter=playground
复制代码 \*当前工作目录下的代表最新版本
然后我们执行 pnpm dev turbo 先在 pipeline 中寻找 dev 指令 然后 根据你是否配置了管道中的执行任务，最后执行子包中的 dev 命令，就代表执行 playground 中的 dev 命令

=======
```

### 3.1.7 Input

默认为`[]`。告诉 turbo 在确定特定任务的包是否已更改时要考虑的文件集。将其设置为文件输入地址将导致仅当与这些真正子包中需要配置输入匹配的文件发生更改时才重新运行任务。例如，如果您想跳过运行测试，除非源文件发生更改，这会很有帮助。

指定`[]`意味着任务在任何文件发生更改时重新运行。

```
{
  "$schema": "https://turborepo.org/schema.json",
  "pipeline": {
   "test": {
      // A package's `test` task should only be rerun when
      // either a `.tsx` or `.ts` file has changed.
      "inputs": ["src/**/*.tsx", "src/**/*.ts", "test/**/*.ts"]
    }
  }
}
```

### 3.1.8 OutputMode

`outputMode`代表输出的模式类型是字符串
| type |
| --- |
| `full` |
| `new-only` |
| `hash-only` |
| `none`|

`full` 也是默认值代表 显示任务的整个输出

`hash-only`仅显示计算的任务哈希

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/042af512c1ae4d72b0f7bf741804960e~tplv-k3u1fbpfcp-watermark.image?)

`new-only`显示缓存未命中的完整输出和缓存命中的计算哈希值。意思就是返回带有 hash 的日志并且当如果有未命中的子包缓存或者打包错误导致缓存未命中再次打包时会输出上一次缓存未命中的的子包完整任务输出日志

`none` 使用“none”隐藏任务输出。意思就是不会在控制台中打印我们拓扑顺序以及打包输入的日志，但是依然会正确执行 `build` 命令

```
{
  "$schema": "https://turborepo.org/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputMode": "new-only"
    },
    "test": {
      "outputs": [],
      "dependsOn": ["build"],
    },
  }
}
```

## 3.2 过滤包 （Filtering Packages）

turbo 中第二个核心概念 filtering packages 允许您将任务仅定位到你想要去操作的包。Turborepo 支持一个类似`pnpm` 中 `--filter`过滤命令但是他不同于传统 pnpm --filter 命令 我们需要在 --filter 后面添加一个等号确定需要对过滤的包进行单独的指令，允许您选择将充当“入口点”的包进入 monorepo 的包/任务图中,您可以通过包名称、包目录、包是否包含依赖项/依赖项以及 git 历史记录的更改来过滤您的项目。
语法 `pnpm build --filter=@relaxed/utils`

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b95599c59a1846068e0f4b707fd5b802~tplv-k3u1fbpfcp-watermark.image?)
过滤器语法还有很多场景这里就不一一展示具体可见[turbo 过滤包语法](https://turborepo.org/docs/core-concepts/filtering)

## 3.3 缓存 （Caching）

Turborepo 检查文件内容变动时，会根据内容生成 Hash 来对比
`turbo`它可以缓存发出的文件和以前运行的命令的日志。它这样做是为了跳过已经完成的工作，从而节省大量时间。
例如我们执行三个子包的 build 命令我们只需要执行`turbo run build`

turbo 在每次打包的过程中会在每个 build 的子包中生成 log 文件在下一次打包的时候
缓存构建内容，并跳过已经计算过的内容，判断是否需要重新构建

在我们在输入 build 命令的时候首先进入到 pipeline 中查看是否关闭缓存，然后通过当前子包中的 turbo 的 log 文件来 hash 对比当前代码是否有改变 如果没有发生改变那么就 跳过构建
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4313fbb8c4af45e3a37e001335a7c1f5~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/512080a8ba034d5c8983e30e2d6eb4fb~tplv-k3u1fbpfcp-watermark.image?)

[强制覆盖缓存](https://turborepo.org/docs/core-concepts/caching#force-overwrite-cache)

相反，如果要强制`turbo`重新执行之前缓存的任务，请添加`--force`标志：

```
#在所有包和应用中运行`Build`N脚本
#忽略缓存命中。
turbo run build --force
```

## 3.4 远程缓存 （Remote Caching）

`Turborepo速度的一个主要关键🔑 是它既懒惰又高效——它做的工作量尽可能少，并且它试图从不重做以前已经完成的工作。` 这是官网对 turbo 远程缓存的一个总结
正常情况下 我们使用 turbo 的时候在构建过程中只能将我们的任务缓存在本地系统上 turbo 支持了一种多人开发共享缓存的模式

开发人员团队和/或持续集成 (CI) 系统使用远程缓存来共享构建输出。如果您的构建是可重现的，那么一台机器的输出可以安全地在另一台机器上重复使用，这可以显着加快构建速度。

如果要将本地 turborepo 链接到远程缓存，请首先使用 Vercel 帐户对 Turborepo CLI 进行身份验证：

```
npx turbo login
```

接下来，您可以通过运行以下命令将您的 turborepo 链接到远程缓存：

```
npx turbo link
```

启用后，对当前缓存的包或应用程序进行一些更改，并使用`turbo run`.  您的缓存工件现在将存储在本地*和*您的远程缓存中。

要验证，请使用以下命令删除本地 Turborepo 缓存：

```
rm -rf ./node_modules/.cache/turbo
```

然后再次运行相同的构建。如果一切正常，`turbo`则不应在本地执行任务，而是从远程缓存下载日志和工件并将它们重放给您。

# 4. 命令行的使用

## 4.1 选项语法

`options`选项语法可以通过 `turbo` 使用不同的方式来进行传递

- 传递值的选项

```js
  --<option>=<value>
  // like
  pnpm build --filter=vue-devui

  pnpm build --filter=@relaxed/hook
```

## 4.2 全局参数 （常用命令）

### 4.2.1 `--continue`

默认为`false`.该标志告诉`turbo`是否在出现错误（即任务的非零退出代码）时继续执行。默认情况下，指定`--parallel`标志将自动设置`--continue`为，`true`除非明确设置为`false`。当`--continue`is 时`true`，`turbo`将以执行期间遇到的最高退出代码值退出。

```
turbo run build --continue
```

### 4.2.2 `--parallel`

默认`false`。脚本程序并行运行命令并忽略依赖关系图。这对于使用实时重新加载进行开发很有用。例如我们启动 vite 项目的时候我们就需要忽略其他可能出现的`dependsOn`依赖关系

```{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", "build/**"],
      "outputMode": "new-only"
    },
    "lint": {
      "outputs": []
    },
    "dev": {
      "cache": false,
      //
      "dependsOn": ["^build"]
    }
  }
}

```

由于我们在 pipeline 中设置了 dependson 的 build 命令依赖优先的问题所以我们可以指定`--parallel`并行执行并且阻止默认依赖 `build` 指令

```
turbo run lint --parallel --no-cache
turbo run dev --parallel --no-cache
```

### 4.2.3 `--filter`

指定包/应用程序、目录和 git 提交的组合作为执行的入口点。

可以组合多个过滤器来选择不同的目标集。此外，过滤器还可以排除目标。匹配任何过滤器且未明确排除的目标将在最终入口点选择中。

有关`--filter`标志和过滤的更多详细信息，请参阅[我们文档中的专用页面](https://turborepo.org/docs/core-concepts/filtering)

```
turbo run build --filter=my-pkg
turbo run test --filter=...^@scope/my-lib
turbo run build --filter=./apps/* --filter=!./apps/admin
```

### 4.2.4 `--force`

忽略现有的缓存工件并强制重新执行所有任务（覆盖重叠的工件）

```
turbo run build --force
```

### 4.2.5 `--no-cache`

默认`false`。不要缓存任务的结果。`next dev`这对于诸如 or 之类的监视命令很有用`react-scripts start`。

```
turbo run build --no-cache
turbo run dev --parallel --no-cache
```

### 4.2.6 `--only`

默认`false`。将执行限制为指定 package 中的指定的任务。这与默认情况下如何`lerna`或`pnpm`运行任务的方式非常相似。如果我们指定了 在依赖前需要执行 build 命令 但是如果我们设置 `--only` 将默认排除 `build`命令

鉴于此管道`turbo.json`：

```
{
  "$schema": "https://turborepo.org/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": [
        "^build"
      ]
    },
    "test": {
      "dependsOn": [
        "^build"
      ]
    }
  }
}
```

```
turbo run test --only
```

将只会执行每个包中的`test`任务。它不会`build`。

本文介绍几种常用的 `turbo` 命令, 当然 `turbo` 提供了许多在命令行中使用的指令， 具体可以查看

[命令行参考](https://turborepo.org/docs/reference/command-line-reference)

# 5. Demo 实战 ✨✨

## 快速开始

我们可以通过现有的 monorepo 改造 也可以 直接创建 turbo 项目，

> turbo 的另一大特色就是改造您现有的 monorepo 也很简单， 只需要安装 turbo 依赖 根目录添加 turbo.json 一切就尽在掌握了

我们本次体验一下 使用 turbo 命令行创建项目， demo 仅展示 turbo 和 monorepo 的结合使用方式，具体构建方式，以及完整项目 可以查看[github 模板](https://github.com/ErKeLost/turborepo-template)

我们在命令行输入

```ts
npx create-turbo@latest
```

创建我们的工程名

```
>>> TURBOREPO

>>> Welcome to Turborepo! Let's get you set up with a new codebase.

? Where would you like to create your turborepo? (./my-turborepo)
```

我们推荐使用 Pnpm 构建

```
? Which package manager do you want to use?
  npm
> pnpm
  yarn
```

turbo 会自动根据我们选择的包管理器为我们创建相对应的项目
然后我们进入项目

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/416f35a0a0d24f2fa222ff28e3b756cd~tplv-k3u1fbpfcp-watermark.image?)

为了更好的体验我们使用 vite 更直观的展示

我们在根目录命令行输入`npm init vue@3`创建一个名为 playground 的 vue 项目

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27c720b0c24f43bc85d243a26c3fcf79~tplv-k3u1fbpfcp-watermark.image?)

然后在 pnpm-workspace.yaml 中添加一个 playground 字段代表把 playground 包添加到 pnpm monorepo 的管理

```js
packages: -'packages/*' - 'playground'
```

紧接着在 packages 里面新建 `@relaxed/hook`, `@relaxed/utils`, `@relaxed/tsconfig` 文件夹前两个作为测试工具库 剩下作为我们 tsconfig 共享配置库

- @relaxed/utils

根目录新建 index.ts

```
export function Accumulation(...value: any[]) {
  return value.reduce((t, v) => t + v, 0)
}

export function Multiplication(...value: any[]) {
  return value.reduce((t, v) => t * v, 1)
}

```

然后我们在 package.json 为了测试我们使用 tsc 打包新增 build 命令添加 tsc

- @relaxed/hook 同理

根目录新建 index.ts

```ts
import { ref } from 'vue'
export default function useBoolean(initValue = false) {
  const bool = ref(initValue)

  function setBool(value: boolean) {
    bool.value = value
  }
  function setTrue() {
    setBool(true)
  }
  function setFalse() {
    setBool(false)
  }
  function toggle() {
    setBool(!bool.value)
  }
  return {
    bool,
    setBool,
    setTrue,
    setFalse,
    toggle
  }
}
```

- @relaxed/tsconfig

在 tsconfig 目录下新建 base.json

```
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Default",
  "compilerOptions": {
    "composite": false,
    "declaration": true,
    "declarationMap": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "inlineSources": false,
    "isolatedModules": true,
    "moduleResolution": "node",
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "preserveWatchOutput": true,
    "skipLibCheck": true,
    "strict": true
  },
  "exclude": ["node_modules"]
}

```

package.json 中

```
{
  "name": "@relaxed/tsconfig",
  "version": "0.0.0",
  "private": true,
  "files": [
    "base.json"
  ]
}


```

首先我们需要把`tsconfig`共享模块添加到两个工具库中

可以直接在`@relaxed/hook` `@relaxed/utils`的 package.json 中添加

```js
  "devDependencies": {
    "@relaxed/tsconfig": "workspace:*",
    "vue": "^3.2.37"
  }
```

或者

```js
pnpm add @relaxed/tsconfig --filter=@relaxed/hook

pnpm add @relaxed/tsconfig --filter=@relaxed/utils
```

然后我们如何在 playground 中使用呢？

> 第一种方法：在 playground 中的 package 中 新增 两个工具子包的依赖项

```
  "dependencies": {
    "@relaxed/hook": "workspace:1.0.0",
    "@relaxed/utils": "workspace:*"
  },
```

然后我们执行
`pnpm install`

> 第二种方法： 我们直接通过命令安装

```js
pnpm add @relaxed/utils  @relaxed/hook --filter=playground
```

`*`当前工作目录下的代表最新版本
然后我们执行 `pnpm dev` turbo 先在 pipeline 中寻找 dev 指令 然后 根据你是否配置了管道中的执行任务，最后执行子包中的 dev 命令，就代表执行`playground`中的`dev`命令

```js
>>>>>>> 32ee3ac0ec0063a855db245ef399134786f3ca46
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { Accumulation, Multiplication } from '@relaxed/utils'
import useBoolean from '@relaxed/hook'
const { bool, setBool, setTrue, setFalse, toggle } = useBoolean(false)
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div style="margin: 10px 0">
      <d-tag type="warning">
        {{ bool }}
      </d-tag>
    </div>
    <d-button type="tertiary" @click="setFalse"> {{ bool }} </d-button>
    <d-button type="primary" @click="setTrue"> {{ bool }} </d-button>
    <d-button type="info" @click="toggle"> Toogle </d-button>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<<<<<<< HEAD
复制代码

然后到了构建环节，我们执行 pnpm build 这时候 我们需要在 turbo.json 中 pipeline 中的 build 设置
"dependsOn": ["^build"],
复制代码
只有加了 ^ 这样 我们才能 先去 执行 依赖 的 三个子包的 build 命令 由于 我们 playground 中 依赖了 其它的子包 所以我们必须 加上 ^ 否则 turbo 会阻止 build 因为我们存在子包的互相依赖，
所以 Turborepo 可以有序的帮助我们进行管理项目之间的逻辑

4. 总结
   Turborepo 可以帮助我们更好的管理 Monorepo 项目, 凭借自身优秀的任务调度管理和增量构建缓存等等， 都可以帮助我们在未来解决 monorepo 目前存在的一些问题，进而提高我们的开发效率，以及提升整个项目在构建等方面的性能。
5. 参考

Turborepo
Pnpm
=======


```

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69997aa0655340c299cd6597c5b11669~tplv-k3u1fbpfcp-watermark.image?)

然后到了构建环节，我们执行 pnpm build 这时候 我们需要在 turbo.json 中 pipeline 中的 build 设置

```
"dependsOn": ["^build"],
```

只有加了 `^` 这样 我们才能 先去 执行 依赖 的 三个子包的 build 命令 由于 我们 playground 中 依赖了 其它的子包 所以我们必须 加上 `^` 否则 turbo 会阻止 build 因为我们存在子包的互相依赖，
所以 Turborepo 可以有序的帮助我们进行管理项目之间的逻辑

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84269c3b0a0944a89a01400706edcf77~tplv-k3u1fbpfcp-watermark.image?)

# 4. 总结

> Turborepo 可以帮助我们更好的管理 Monorepo 项目, 凭借自身优秀的任务调度管理和增量构建缓存等等...， 都可以帮助我们在未来解决 monorepo 目前存在的一些问题，进而提高我们的开发效率，以及提升整个项目在构建等方面的性能

# 5. 参考

- [Turborepo](https://turborepo.org/docs/getting-started)
- [Pnpm](https://pnpm.io/zh/)
