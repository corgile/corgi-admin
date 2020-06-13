<template>
  <div>
    <a-row>
      <a-col :span="24">
        <a-card
          :bordered="false"
          :bodyStyle="{ padding: '16px' }"
        >
          <a-card
            :bordered="false"
            class="environment-info"
            :bodyStyle="{ padding: '16px' }"
          >
            <template slot="title">
              环境信息
              <a
                href="javascript:void(0);"
                @click="handleCopyEnvironments"
              >
                <a-icon type="copy" />
              </a>
            </template>
            <!--/ 版本信息 & 检测-->
            <ul style="margin: 0;padding: 0;list-style: none;">
              <li>版本：{{ environments.version }}</li>
              <li>数据库：{{ environments.database }}</li>
              <li>运行模式：{{ environments.mode }}</li>
              <li>启动时间：{{ environments.startTime | moment }}</li>
              <li>作者：<a href="https://gitee.com/corgile/" target="_blank">Corgile</a></li>
              <li>基于<a href="https://github.com/halo-dev/halo-admin" target="_blank">Halo-Admin</a>二次开发</li>
            </ul>
          </a-card>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import adminApi from '@/api/admin'

export default {
  data() {
    return {
      adminVersion: this.VERSION,
      environments: {},
      checking: false,
      isLatest: false,
      latestData: {}
    }
  },
  created() {
    this.getEnvironments()
  },
  methods: {
    getEnvironments() {
      adminApi.environments().then(response => {
        this.environments = response.data.data
      })
    },
    handleCopyEnvironments() {
      const text = `版本：${this.environments.version}
                    数据库：${this.environments.database}
                    运行模式：${this.environments.mode}
                    User Agent：${navigator.userAgent}`
      this.$copyText(text)
        .then(message => {
          this.$log.debug('copy', message)
          this.$message.success('复制成功！')
        })
        .catch(err => {
          this.$log.debug('copy.err', err)
          this.$message.error('复制失败！')
        })
    },
    calculateIntValue(version) {
      version = version.replace(/v/g, '')
      const ss = version.split('.')
      if (ss == null || ss.length !== 3) {
        return -1
      }
      const major = parseInt(ss[0])
      const minor = parseInt(ss[1])
      const micro = parseInt(ss[2])
      if (isNaN(major) || isNaN(minor) || isNaN(micro)) {
        return -1
      }
      return major * 1000000 + minor * 1000 + micro
    }
  }
}
</script>
