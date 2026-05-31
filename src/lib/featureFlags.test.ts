import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

// featureFlags はモジュールレベルで評価されるため、
// 環境変数を切り替えるたびに vi.resetModules() + 動的 import() でモジュールを再評価する

describe('getServiceUrl', () => {
  it('enabled が true の場合、指定した serviceUrl をそのまま返す', async () => {
    const { getServiceUrl } = await import('@/lib/featureFlags')
    const result = getServiceUrl(true, '/services/dx-ai-support')
    expect(result).toBe('/services/dx-ai-support')
  })

  it('enabled が false の場合、null を返す', async () => {
    const { getServiceUrl } = await import('@/lib/featureFlags')
    const result = getServiceUrl(false, '/services/dx-ai-support')
    expect(result).toBeNull()
  })

  it('enabled が false の場合、/coming-soon を返さない', async () => {
    const { getServiceUrl } = await import('@/lib/featureFlags')
    const result = getServiceUrl(false, '/services/dx-ai-support')
    expect(result).not.toBe('/coming-soon')
  })

  it('空文字の serviceUrl が渡された場合、そのまま空文字を返す', async () => {
    const { getServiceUrl } = await import('@/lib/featureFlags')
    const result = getServiceUrl(true, '')
    expect(result).toBe('')
  })
})

describe('featureFlags', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  afterEach(() => {
    vi.unstubAllEnvs()
  })

  describe('NEXT_PUBLIC_FEATURE_DX_AI_SUPPORT', () => {
    it('環境変数が "true" のとき dxAiSupport が true になる', async () => {
      vi.stubEnv('NEXT_PUBLIC_FEATURE_DX_AI_SUPPORT', 'true')
      const { featureFlags } = await import('@/lib/featureFlags')
      expect(featureFlags.dxAiSupport).toBe(true)
    })

    it('環境変数が "false" のとき dxAiSupport が false になる', async () => {
      vi.stubEnv('NEXT_PUBLIC_FEATURE_DX_AI_SUPPORT', 'false')
      const { featureFlags } = await import('@/lib/featureFlags')
      expect(featureFlags.dxAiSupport).toBe(false)
    })

    it('環境変数が未設定のとき dxAiSupport が false になる', async () => {
      vi.stubEnv('NEXT_PUBLIC_FEATURE_DX_AI_SUPPORT', '')
      const { featureFlags } = await import('@/lib/featureFlags')
      expect(featureFlags.dxAiSupport).toBe(false)
    })
  })

  describe('NEXT_PUBLIC_FEATURE_WEB_DEVELOPMENT', () => {
    it('環境変数が "true" のとき webDevelopment が true になる', async () => {
      vi.stubEnv('NEXT_PUBLIC_FEATURE_WEB_DEVELOPMENT', 'true')
      const { featureFlags } = await import('@/lib/featureFlags')
      expect(featureFlags.webDevelopment).toBe(true)
    })

    it('環境変数が "false" のとき webDevelopment が false になる', async () => {
      vi.stubEnv('NEXT_PUBLIC_FEATURE_WEB_DEVELOPMENT', 'false')
      const { featureFlags } = await import('@/lib/featureFlags')
      expect(featureFlags.webDevelopment).toBe(false)
    })

    it('環境変数が未設定のとき webDevelopment が false になる', async () => {
      vi.stubEnv('NEXT_PUBLIC_FEATURE_WEB_DEVELOPMENT', '')
      const { featureFlags } = await import('@/lib/featureFlags')
      expect(featureFlags.webDevelopment).toBe(false)
    })
  })

  describe('NEXT_PUBLIC_FEATURE_PROGRAMMING_SCHOOL', () => {
    it('環境変数が "true" のとき programmingSchool が true になる', async () => {
      vi.stubEnv('NEXT_PUBLIC_FEATURE_PROGRAMMING_SCHOOL', 'true')
      const { featureFlags } = await import('@/lib/featureFlags')
      expect(featureFlags.programmingSchool).toBe(true)
    })

    it('環境変数が "false" のとき programmingSchool が false になる', async () => {
      vi.stubEnv('NEXT_PUBLIC_FEATURE_PROGRAMMING_SCHOOL', 'false')
      const { featureFlags } = await import('@/lib/featureFlags')
      expect(featureFlags.programmingSchool).toBe(false)
    })

    it('環境変数が未設定のとき programmingSchool が false になる', async () => {
      vi.stubEnv('NEXT_PUBLIC_FEATURE_PROGRAMMING_SCHOOL', '')
      const { featureFlags } = await import('@/lib/featureFlags')
      expect(featureFlags.programmingSchool).toBe(false)
    })
  })

  describe('NEXT_PUBLIC_FEATURE_IT_TRAINING', () => {
    it('環境変数が "true" のとき itTraining が true になる', async () => {
      vi.stubEnv('NEXT_PUBLIC_FEATURE_IT_TRAINING', 'true')
      const { featureFlags } = await import('@/lib/featureFlags')
      expect(featureFlags.itTraining).toBe(true)
    })

    it('環境変数が "false" のとき itTraining が false になる', async () => {
      vi.stubEnv('NEXT_PUBLIC_FEATURE_IT_TRAINING', 'false')
      const { featureFlags } = await import('@/lib/featureFlags')
      expect(featureFlags.itTraining).toBe(false)
    })

    it('環境変数が未設定のとき itTraining が false になる', async () => {
      vi.stubEnv('NEXT_PUBLIC_FEATURE_IT_TRAINING', '')
      const { featureFlags } = await import('@/lib/featureFlags')
      expect(featureFlags.itTraining).toBe(false)
    })
  })

  describe('NEXT_PUBLIC_FEATURE_INTRO_SCREEN', () => {
    it('環境変数が "true" のとき introScreen が true になる', async () => {
      vi.stubEnv('NEXT_PUBLIC_FEATURE_INTRO_SCREEN', 'true')
      const { featureFlags } = await import('@/lib/featureFlags')
      expect(featureFlags.introScreen).toBe(true)
    })

    it('環境変数が "false" のとき introScreen が false になる', async () => {
      vi.stubEnv('NEXT_PUBLIC_FEATURE_INTRO_SCREEN', 'false')
      const { featureFlags } = await import('@/lib/featureFlags')
      expect(featureFlags.introScreen).toBe(false)
    })

    it('環境変数が未設定のとき introScreen が false になる', async () => {
      vi.stubEnv('NEXT_PUBLIC_FEATURE_INTRO_SCREEN', '')
      const { featureFlags } = await import('@/lib/featureFlags')
      expect(featureFlags.introScreen).toBe(false)
    })
  })

  describe('複数フラグの独立性', () => {
    it('一部のフラグのみ true にした場合、他のフラグには影響しない', async () => {
      vi.stubEnv('NEXT_PUBLIC_FEATURE_DX_AI_SUPPORT', 'true')
      vi.stubEnv('NEXT_PUBLIC_FEATURE_WEB_DEVELOPMENT', 'false')
      vi.stubEnv('NEXT_PUBLIC_FEATURE_PROGRAMMING_SCHOOL', 'false')
      vi.stubEnv('NEXT_PUBLIC_FEATURE_IT_TRAINING', 'false')
      vi.stubEnv('NEXT_PUBLIC_FEATURE_INTRO_SCREEN', 'false')
      const { featureFlags } = await import('@/lib/featureFlags')
      expect(featureFlags.dxAiSupport).toBe(true)
      expect(featureFlags.webDevelopment).toBe(false)
      expect(featureFlags.programmingSchool).toBe(false)
      expect(featureFlags.itTraining).toBe(false)
      expect(featureFlags.introScreen).toBe(false)
    })

    it('全フラグを true にした場合、すべてのフラグが true になる', async () => {
      vi.stubEnv('NEXT_PUBLIC_FEATURE_DX_AI_SUPPORT', 'true')
      vi.stubEnv('NEXT_PUBLIC_FEATURE_WEB_DEVELOPMENT', 'true')
      vi.stubEnv('NEXT_PUBLIC_FEATURE_PROGRAMMING_SCHOOL', 'true')
      vi.stubEnv('NEXT_PUBLIC_FEATURE_IT_TRAINING', 'true')
      vi.stubEnv('NEXT_PUBLIC_FEATURE_INTRO_SCREEN', 'true')
      const { featureFlags } = await import('@/lib/featureFlags')
      expect(featureFlags.dxAiSupport).toBe(true)
      expect(featureFlags.webDevelopment).toBe(true)
      expect(featureFlags.programmingSchool).toBe(true)
      expect(featureFlags.itTraining).toBe(true)
      expect(featureFlags.introScreen).toBe(true)
    })
  })
})
