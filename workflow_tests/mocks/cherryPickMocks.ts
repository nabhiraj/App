/* eslint-disable @typescript-eslint/naming-convention */
import {createMockStep} from '../utils/utils';

// validateactor
const CHERRYPICK__VALIDATEACTOR__CHECK_IF_USER_IS_DEPLOYER_TRUE__STEP_MOCK = createMockStep(
    'Check if user is deployer',
    'Checking if user is a deployer',
    'VALIDATEACTOR',
    [],
    ['GITHUB_TOKEN'],
    {IS_DEPLOYER: true},
);
const CHERRYPICK__VALIDATEACTOR__CHECK_IF_USER_IS_DEPLOYER_FALSE__STEP_MOCK = createMockStep(
    'Check if user is deployer',
    'Checking if user is a deployer',
    'VALIDATEACTOR',
    [],
    ['GITHUB_TOKEN'],
    {IS_DEPLOYER: false},
);
const CHERRYPICK__VALIDATEACTOR__TRUE__STEP_MOCKS = [CHERRYPICK__VALIDATEACTOR__CHECK_IF_USER_IS_DEPLOYER_TRUE__STEP_MOCK] as const;
const CHERRYPICK__VALIDATEACTOR__FALSE__STEP_MOCKS = [CHERRYPICK__VALIDATEACTOR__CHECK_IF_USER_IS_DEPLOYER_FALSE__STEP_MOCK] as const;

// createnewversion
const CHERRYPICK__CREATENEWVERSION__CREATE_NEW_VERSION__STEP_MOCK = createMockStep(
    'Create new version',
    'Creating new version',
    'CREATENEWVERSION',
    [],
    [],
    {NEW_VERSION: '1.2.3'},
    null,
    true,
    'createNewVersion',
);
const CHERRYPICK__CREATENEWVERSION__STEP_MOCKS = [CHERRYPICK__CREATENEWVERSION__CREATE_NEW_VERSION__STEP_MOCK] as const;

// cherrypick
const CHERRYPICK__CHERRYPICK__CHECKOUT_STAGING_BRANCH__STEP_MOCK = createMockStep('Checkout staging branch', 'Checking out staging branch', 'CHERRYPICK', ['ref', 'token'], []);
const CHERRYPICK__CHERRYPICK__SET_UP_GIT_FOR_OSBOTIFY__STEP_MOCK = createMockStep('Set up git for OSBotify', 'Setting up git for OSBotify', 'CHERRYPICK', ['GPG_PASSPHRASE'], [], {
    OS_BOTIFY_API_TOKEN: 'os_botify_api_token',
});
const CHERRYPICK__CHERRYPICK__GET_PREVIOUS_APP_VERSION__STEP_MOCK = createMockStep('Get previous app version', 'Get previous app version', 'CHERRYPICK', ['SEMVER_LEVEL']);
const CHERRYPICK__CHERRYPICK__FETCH_HISTORY_OF_RELEVANT_REFS__STEP_MOCK = createMockStep('Fetch history of relevant refs', 'Fetch history of relevant refs', 'CHERRYPICK');
const CHERRYPICK__CHERRYPICK__GET_VERSION_BUMP_COMMIT__STEP_MOCK = createMockStep('Get version bump commit', 'Get version bump commit', 'CHERRYPICK', [], [], {
    VERSION_BUMP_SHA: 'version_bump_sha',
});
const CHERRYPICK__CHERRYPICK__GET_MERGE_COMMIT_FOR_PULL_REQUEST_TO_CP__STEP_MOCK = createMockStep(
    'Get merge commit for pull request to CP',
    'Get merge commit for pull request to CP',
    'CHERRYPICK',
    ['GITHUB_TOKEN', 'USER', 'PULL_REQUEST_NUMBER'],
    [],
    {MERGE_ACTOR: '@dummyauthor'},
);
const CHERRYPICK__CHERRYPICK__CHERRY_PICK_THE_VERSION_BUMP_TO_STAGING__STEP_MOCK = createMockStep(
    'Cherry-pick the version-bump to staging',
    'Cherry-picking the version-bump to staging',
    'CHERRYPICK',
    [],
    [],
);
const CHERRYPICK__CHERRYPICK__CHERRY_PICK_THE_MERGE_COMMIT_OF_TARGET_PR_TO_NEW_BRANCH__HAS_NO_CONFLICTS__STEP_MOCK = createMockStep(
    'Cherry-pick the merge commit of target PR',
    'Cherry-picking the merge commit of target PR',
    'CHERRYPICK',
    [],
    [],
    {HAS_CONFLICTS: false},
);
// eslint-disable-next-line rulesdir/no-negated-variables
const CHERRYPICK__CHERRYPICK__CHERRY_PICK_THE_MERGE_COMMIT_OF_TARGET_PR_TO_NEW_BRANCH__HAS_CONFLICTS__STEP_MOCK = createMockStep(
    'Cherry-pick the merge commit of target PR',
    'Cherry-picking the merge commit of target PR',
    'CHERRYPICK',
    [],
    [],
    {HAS_CONFLICTS: true},
);
const CHERRYPICK__CHERRYPICK__PUSH_CHANGES__STEP_MOCK = createMockStep('Push changes', 'Pushing changes', 'CHERRYPICK', [], []);
const CHERRYPICK__CHERRYPICK__CREATE_PULL_REQUEST_TO_MANUALLY_FINISH_CP__STEP_MOCK = createMockStep(
    'Create Pull Request to manually finish CP',
    'Creating Pull Request to manually finish CP',
    'CHERRYPICK',
    [],
    ['GITHUB_TOKEN'],
);
const CHERRYPICK__CHERRYPICK__ANNOUNCES_A_CP_FAILURE_IN_THE_ANNOUNCE_SLACK_ROOM__STEP_MOCK = createMockStep(
    'Announces a CP failure in the #announce Slack room',
    'Announcing a CP failure',
    'CHERRYPICK',
    ['status'],
    ['GITHUB_TOKEN', 'SLACK_WEBHOOK_URL'],
);

const getCherryPickMockSteps = (upToDate: boolean, hasConflicts: boolean) =>
    [
        CHERRYPICK__CHERRYPICK__CHECKOUT_STAGING_BRANCH__STEP_MOCK,
        CHERRYPICK__CHERRYPICK__SET_UP_GIT_FOR_OSBOTIFY__STEP_MOCK,
        CHERRYPICK__CHERRYPICK__GET_PREVIOUS_APP_VERSION__STEP_MOCK,
        CHERRYPICK__CHERRYPICK__FETCH_HISTORY_OF_RELEVANT_REFS__STEP_MOCK,
        CHERRYPICK__CHERRYPICK__GET_VERSION_BUMP_COMMIT__STEP_MOCK,
        CHERRYPICK__CHERRYPICK__GET_MERGE_COMMIT_FOR_PULL_REQUEST_TO_CP__STEP_MOCK,
        CHERRYPICK__CHERRYPICK__CHERRY_PICK_THE_VERSION_BUMP_TO_STAGING__STEP_MOCK,
        hasConflicts
            ? CHERRYPICK__CHERRYPICK__CHERRY_PICK_THE_MERGE_COMMIT_OF_TARGET_PR_TO_NEW_BRANCH__HAS_CONFLICTS__STEP_MOCK
            : CHERRYPICK__CHERRYPICK__CHERRY_PICK_THE_MERGE_COMMIT_OF_TARGET_PR_TO_NEW_BRANCH__HAS_NO_CONFLICTS__STEP_MOCK,
        CHERRYPICK__CHERRYPICK__PUSH_CHANGES__STEP_MOCK,
        CHERRYPICK__CHERRYPICK__CREATE_PULL_REQUEST_TO_MANUALLY_FINISH_CP__STEP_MOCK,
        CHERRYPICK__CHERRYPICK__ANNOUNCES_A_CP_FAILURE_IN_THE_ANNOUNCE_SLACK_ROOM__STEP_MOCK,
    ] as const;

export {CHERRYPICK__VALIDATEACTOR__TRUE__STEP_MOCKS, CHERRYPICK__VALIDATEACTOR__FALSE__STEP_MOCKS, CHERRYPICK__CREATENEWVERSION__STEP_MOCKS, getCherryPickMockSteps};
