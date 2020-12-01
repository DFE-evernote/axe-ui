const chalk = require('chalk')
const msgPath = process.env.GIT_PARAMS
const msg = require('fs')
  .readFileSync(msgPath, 'utf-8')
  .trim()

const commitRE = /^(revert: )?(feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|types|build)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      `commit信息的格式不正确.`
    )}\n\n` +
      chalk.red(
        `  自动生成更改日志需要正确的commit信息格式. 比如下面这样:\n\n`
      ) +
      `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${chalk.green(
        `fix(v-model): handle events on blur (close #28)`
      )}\n\n` +
      chalk.red(
        `  可以查看 .github/COMMIT_CONVENTION.md 来获取更详细的说明信息.\n`
      ) +
      chalk.red(
        `  你也可以使用 ${chalk.cyan(
          `npm run commit`
        )} 命令,以交互的形式自动生成commit提交信息.\n`
      )
  )
  process.exit(1)
}
